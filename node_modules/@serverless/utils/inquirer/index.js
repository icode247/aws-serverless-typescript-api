// Customize inquirer style

'use strict';

const identity = require('ext/function/identity');
const { dirname } = require('path');
const requireUncached = require('ncjsm/require-uncached');
const resolve = require('ncjsm/resolve/sync');
const chalk = require('chalk');
const { style } = require('../log');

const inquirersChalkPath = resolve(dirname(require.resolve('inquirer')), 'chalk').realPath;

module.exports = requireUncached(inquirersChalkPath, () => {
  // Ensure distinct chalk instance for inquirer and hack it with altered styles
  Object.defineProperties(require(inquirersChalkPath), {
    cyan: {
      get() {
        return chalk.bold;
      },
    },
    bold: {
      get() {
        return identity;
      },
    },
  });

  const BasePrompt = require('inquirer/lib/prompts/base');
  const originalGetQuestion = BasePrompt.prototype.getQuestion;
  BasePrompt.prototype.getQuestion = function () {
    // Here we want to override the default prefix which is equal to `chalk.green('?')`
    this.opt.prefix = style.strong('?');
    return originalGetQuestion.call(this);
  };

  return require('inquirer');
});
