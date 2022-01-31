# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [6.0.0](https://github.com/serverless/utils/compare/v5.20.3...v6.0.0) (2022-01-27)

### ⚠ BREAKING CHANGES

- **Log:** Remove legacy logs interface, only modern interface as the only to be used is now exposed
- Node.js version 12 or later is required (dropped support for v10)

### Features

- **Log:** Remove legacy logs interface ([#154](https://github.com/serverless/utils/pull/154)) ([7bfbdea](https://github.com/serverless/utils/commit/7bfbdea589a92c3021981aa1e9c738e48b5d4464)) ([Mariusz Nowak](https://github.com/medikoo))
- **Log:** Setup new log writers ([#141](https://github.com/serverless/utils/pull/141)) ([2c18da7](https://github.com/serverless/utils/commit/2c18da7be00599dd67d5014a5c6016f5c488da20)) ([Mariusz Nowak](https://github.com/medikoo))
- **Log:** Support global `--debug` flag ([#149](https://github.com/serverless/utils/pull/149)) ([3c0909c](https://github.com/serverless/utils/commit/3c0909cf0f410bc32216c8ecd51080b1ab85beba)) ([Mariusz Nowak](https://github.com/medikoo))
- **Log:** Support global `--verbose` flag ([#149](https://github.com/serverless/utils/pull/149)) ([55f5432](https://github.com/serverless/utils/commit/55f5432073328558f83668d3760442637e61c9c2)) ([Mariusz Nowak](https://github.com/medikoo))

### Maintenance Improvements

- Drop support for Node.js versions below v12 ([6aee6ab](https://github.com/serverless/utils/commit/6aee6abe961bfb80d514e7e90296164e46046602)) ([Mariusz Nowak](https://github.com/medikoo))
- **Log:** Remove legacy logs ([b435765](https://github.com/serverless/utils/commit/b435765f54b3988d7b43d33a5baa3d970d4c200e)) ([Mariusz Nowak](https://github.com/medikoo))

### [5.20.3](https://github.com/serverless/utils/compare/v5.20.2...v5.20.3) (2022-01-18)

### Maintenance Improvements

- **Log:** Configure modern logs for `config` util ([#152](https://github.com/serverless/utils/pull/152)) ([d055467](https://github.com/serverless/utils/commit/d055467c998c63ebc9c8e9a3fb9a266426bf1349)) ([Mariusz Nowak](https://github.com/medikoo))

### [5.20.2](https://github.com/serverless/utils/compare/v5.20.1...v5.20.2) (2021-12-17)

### Bug Fixes

- **Log:** Ensure no doubled setup of the log reporter ([#150](https://github.com/serverless/utils/pull/150)) ([513e6d5](https://github.com/serverless/utils/commit/513e6d5b538a69862aea7ce34fa090d5a0782dd0)) ([Mariusz Nowak](https://github.com/medikoo))

### [5.20.1](https://github.com/serverless/utils/compare/v5.20.0...v5.20.1) (2021-11-08)

### Bug Fixes

- **Log:** Ensure custom styles are applied globally ([#147](https://github.com/serverless/utils/pull/147)) ([6473459](https://github.com/serverless/utils/commit/6473459eeab9fcb94762dc7979abeeec9594739c)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.20.0](https://github.com/serverless/utils/compare/v5.19.0...v5.20.0) (2021-11-03)

### Features

- **Log:**
  - `name` option for `progress.create` ([#142](https://github.com/serverless/utils/pull/142)) ([4110e76](https://github.com/serverless/utils/commit/4110e766e7292a74267f020bd3cee8b665e09f4d)) ([Mariusz Nowak](https://github.com/medikoo))
  - Support optional `message` in `progress.create` via options ([#142](https://github.com/serverless/utils/pull/142)) ([7051e34](https://github.com/serverless/utils/commit/7051e34ae7be498b5a3c5fb80803bbe07d170c4a)) ([Mariusz Nowak](https://github.com/medikoo))
  - Update main log function to write at `notice` level ([#143](https://github.com/serverless/utils/pull/143)) ([dc6afd7](https://github.com/serverless/utils/commit/dc6afd799a51a04fd79e7296c3e7bf08e560ea84)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.19.0](https://github.com/serverless/utils/compare/v5.18.0...v5.19.0) (2021-10-20)

### Features

- **Log:**
  - Introduce `progress.create()` factory, which allows to create unnamed progress instances ([#138](https://github.com/serverless/utils/pull/138)) ([0bb2fd1](https://github.com/serverless/utils/commit/0bb2fd187760dcc1dc72dfbeec930b3cca6692e7)) ([Mariusz Nowak](https://github.com/medikoo))
  - Configure `log.success` as an alias to `log.notice.success` ([#138](https://github.com/serverless/utils/pull/138)) ([8bbff52](https://github.com/serverless/utils/commit/8bbff522da748aec24c44f4a2940df62ab805188)) ([Mariusz Nowak](https://github.com/medikoo))
  - Configure `log.verbose` as an alias to `log.info` ([#138](https://github.com/serverless/utils/pull/138)) ([7a0319f](https://github.com/serverless/utils/commit/7a0319f37cda3721a73774ec8878f737ac41df2b)) ([Mariusz Nowak](https://github.com/medikoo))
  - Introduce `progress.update` as an alias for `progress.notice` ([#138](https://github.com/serverless/utils/pull/138)) ([0d28345](https://github.com/serverless/utils/commit/0d28345a81ec4a887377fd60bebb176bb755e019)) ([Mariusz Nowak](https://github.com/medikoo))

### Maintenance Improvements

- **Log:**
  - Adjust style of error level logs ([#138](https://github.com/serverless/utils/pull/138)) ([538d816](https://github.com/serverless/utils/commit/538d8168ae4db11196b5827e6d6131a976cd4a4f)) ([Mariusz Nowak](https://github.com/medikoo))
  - Remove effectless decoration ([#138](https://github.com/serverless/utils/pull/138)) ([85e322a](https://github.com/serverless/utils/commit/85e322a6f7fbe68f5195cf85d98c6031445eae88)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.18.0](https://github.com/serverless/utils/compare/v5.17.3...v5.18.0) (2021-10-13)

### Features

- **Log:**
  - Introduce `style.linkStrong` and do not decorate `style.link` ([#135](https://github.com/serverless/utils/pull/135)) ([ab762ca](https://github.com/serverless/utils/commit/ab762ca0116b1dcdc9755cbba6c5ea40b8773295)) ([Mariusz Nowak](https://github.com/medikoo))
  - Remove decoration symbol from `log.notice.skip` ([#136](https://github.com/serverless/utils/pull/136)) ([172f392](https://github.com/serverless/utils/commit/172f3928d4b078c88ec8c302fa94fa8538926205)) ([Piotr Grzesik](https://github.com/pgrzesik))

### [5.17.3](https://github.com/serverless/utils/compare/v5.17.2...v5.17.3) (2021-10-08)

### Bug Fixes

- Ensure `style` is multi instance safe ([#133](https://github.com/serverless/utils/pull/133)) ([796d38c](https://github.com/serverless/utils/commit/796d38c16b5b1d4078faae7ef13a117059a86797)) ([Mariusz Nowak](https://github.com/medikoo))

### [5.17.2](https://github.com/serverless/utils/compare/v5.17.1...v5.17.2) (2021-10-08)

### Bug Fixes

- **Log:**
  - Ensure reliable mode resolution with multiple installations ([#131](https://github.com/serverless/utils/pull/131)) ([6b2d201](https://github.com/serverless/utils/commit/6b2d201bc0926b7e387a15c73e53bb4422ba5bae)) ([Mariusz Nowak](https://github.com/medikoo))
  - Fix `legacy.log` to reflect`sls.cli.log` args handling ([#130](https://github.com/serverless/utils/pull/130)) ([789785b](https://github.com/serverless/utils/commit/789785bc6f84561177c9735c010b3dc7d4acee12)) ([Mariusz Nowak](https://github.com/medikoo))

### [5.17.1](https://github.com/serverless/utils/compare/v5.17.0...v5.17.1) (2021-10-07)

_Maintainance update_

## [5.17.0](https://github.com/serverless/utils/compare/v5.16.0...v5.17.0) (2021-09-29)

### Features

- **Log:**
  - Modern logs for interactive exchange ([#128](https://github.com/serverless/utils/pull/128)) ([4b1f36a](https://github.com/serverless/utils/commit/4b1f36a93ad474f89e061bae6ec29cb755e53f0d)) ([Mariusz Nowak](https://github.com/medikoo))
  - Setup `strong` and `title` styles ([5ddca35](https://github.com/serverless/utils/commit/5ddca35879db79c6b96ba6d1d9152b9f40f22682)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.16.0](https://github.com/serverless/utils/compare/v5.15.0...v5.16.0) (2021-09-23)

### Features

- **Log:**
  - Configure `success` and `skip` notice level decorators ([#127](https://github.com/serverless/utils/pull/126)) ([65ed6fe](https://github.com/serverless/utils/commit/65ed6fe9ff3d0ccd21d7788988bf50f8549df339)) ([Mariusz Nowak](https://github.com/medikoo))
  - Introduce `link` style ([#127](https://github.com/serverless/utils/pull/126)) ([bf54126](https://github.com/serverless/utils/commit/bf54126d82ba662f75c5cf3ba80f731cdd35cba1)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.15.0](https://github.com/serverless/utils/compare/v5.14.0...v5.15.0) (2021-09-22)

### Features

- **Log:** Support internally `--verbose` flag for modern logs ([#126](https://github.com/serverless/utils/pull/126)) ([749de91](https://github.com/serverless/utils/commit/749de91a9aa6596a6b7a147f0eeb52d2923e39d2)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.14.0](https://github.com/serverless/utils/compare/v5.13.0...v5.14.0) (2021-09-21)

### Features

- **Log:** Generalize handling of main process events ([#125](https://github.com/serverless/utils/pull/125)) ([bbf7687](https://github.com/serverless/utils/commit/bbf768742fc7cb62d920848a878bc78d0752b3d3)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.13.0](https://github.com/serverless/utils/compare/v5.12.0...v5.13.0) (2021-09-15)

### Features

- **Log:** Do not write level prefix with deprecation warnings ([#123](https://github.com/serverless/utils/pull/123)) ([67cce8b](https://github.com/serverless/utils/commit/67cce8b504356ac59fcf6e21fdbdda2b0253b49a)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.12.0](https://github.com/serverless/utils/compare/v5.11.0...v5.12.0) (2021-09-14)

### Features

- **Log:** Improve styles when just 16 or 256 colors are supported ([#121](https://github.com/serverless/utils/pull/121)) ([668362d](https://github.com/serverless/utils/commit/668362d3ef2159b075408bac2427b09a5aa2f9b4)) ([d97bf24](https://github.com/serverless/utils/commit/d97bf240ee853c684247b6cdc8a38a810114504f)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.11.0](https://github.com/serverless/utils/compare/v5.10.0...v5.11.0) (2021-09-10)

### Features

- **Log:** Support multiline input in style decorators ([#119](https://github.com/serverless/utils/pull/119)) ([668362d](https://github.com/serverless/utils/commit/668362d3ef2159b075408bac2427b09a5aa2f9b4)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.10.0](https://github.com/serverless/utils/compare/v5.9.0...v5.10.0) (2021-09-09)

### Features

- **Log:** `style` decorators interface ([#117](https://github.com/serverless/utils/pull/117)) ([ec173d0](https://github.com/serverless/utils/commit/ec173d01bfffdc6674afd6a347afc7e871182cb9)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.9.0](https://github.com/serverless/utils/compare/v5.8.1...v5.9.0) (2021-09-08)

### Features

- **Log (Experimental):**
  - `progress.clear` to clear and close progress output ([#114](https://github.com/serverless/utils/pull/114)) ([f81801f](https://github.com/serverless/utils/commit/f81801f90fdb85857cb86f9fd3434793b9daf3ab)) ([Mariusz Nowak](https://github.com/medikoo))
  - Main progress instance, to cover entire command progress ([#115](https://github.com/serverless/utils/pull/115)) ([322fcba](https://github.com/serverless/utils/commit/322fcba7a19a1bb89dc5ed4a890862d5d9a61b0c)) ([Mariusz Nowak](https://github.com/medikoo))

### [5.8.1](https://github.com/serverless/utils/compare/v5.8.0...v5.8.1) (2021-09-07)

### Maintenance Improvements

- **Log:** Ensure writing functions respect mocked `stdout.write` ([#112](https://github.com/serverless/utils/pull/112)) ([99a0706](https://github.com/serverless/utils/commit/99a07068130eeed47cee7cb6db1d60f3f632e237)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.8.0](https://github.com/serverless/utils/compare/v5.7.0...v5.8.0) (2021-09-07)

### Features

- **Log (Experimental):**
  - `legacy` interface for legacy logs to be shown conditionally ([#102](https://github.com/serverless/utils/pull/102)) ([281ae29](https://github.com/serverless/utils/commit/281ae2995200c6b9a9de5b1f75624d22dad64129)) ([Mariusz Nowak](https://github.com/medikoo))
  - `log` modern write interface for event logs ([#103](https://github.com/serverless/utils/pull/103)) ([26a59e6](https://github.com/serverless/utils/commit/26a59e60f5a5b33319cc020b85f3717a8c138390)) ([Mariusz Nowak](https://github.com/medikoo))
  - Endpoints that inform on used log level ([#103](https://github.com/serverless/utils/pull/103)) ([089576e](https://github.com/serverless/utils/commit/089576ec6fd084ec062c7587c8e832d5751bf581)) ([Mariusz Nowak](https://github.com/medikoo))
  - `writeText` modern write interface for substantial text output ([#104](https://github.com/serverless/utils/pull/104)) ([a10a7fa](https://github.com/serverless/utils/commit/a10a7fa296369e5bcc8d0ba07f0aeced51182e7d)) ([Mariusz Nowak](https://github.com/medikoo))
  - `progress` modern write interface for dynamic progress ([#105](https://github.com/serverless/utils/pull/105)) ([8e4f982](https://github.com/serverless/utils/commit/8e4f9826ab436650d21a489422fc7e0b59a8a0f6)) ([Mariusz Nowak](https://github.com/medikoo))
  - `getPluginWriters` to return modern writers dedicated for plugins ([#106](https://github.com/serverless/utils/pull/106)) ([3c8ee39](https://github.com/serverless/utils/commit/3c8ee3947ffe4a8ee9d782865f7946ed5f7cd0a4)) ([Mariusz Nowak](https://github.com/medikoo))
  - Expose information on whether we're in context of TTY ([#109](https://github.com/serverless/utils/pull/109)) ([b3ca20a](https://github.com/serverless/utils/commit/b3ca20aeede06af05e7c0e4f467bc66033a81599)) ([Mariusz Nowak](https://github.com/medikoo))
  - **Node.js CLI reporter:**
    - Support hiding legacy logs ([#107](https://github.com/serverless/utils/pull/107)) ([2d51179](https://github.com/serverless/utils/commit/2d51179edf539f6a39e8e161efcd53f78769e843)) ([Mariusz Nowak](https://github.com/medikoo))
    - Report event logs ([#107](https://github.com/serverless/utils/pull/107)) ([44db92c](https://github.com/serverless/utils/commit/44db92cdb17d452dacdf566a0cefc7666d37edae)) ([Mariusz Nowak](https://github.com/medikoo))
    - Expose configured log level ([#109](https://github.com/serverless/utils/pull/109)) ([6ce33b7](https://github.com/serverless/utils/commit/6ce33b71b423691c0f2d34f3ab91d2a002dbc91b)) ([Mariusz Nowak](https://github.com/medikoo))
    - Report substantial text output ([#108](https://github.com/serverless/utils/pull/108)) ([bc20bc6](https://github.com/serverless/utils/commit/bc20bc6e34258a049727822cb7ebc1b78e6f8e03)) ([Mariusz Nowak](https://github.com/medikoo))
    - Report dynamic progress ([#109](https://github.com/serverless/utils/pull/109)) ([6d916b3](https://github.com/serverless/utils/commit/6d916b36dc40bf1dacec541d34e3d59272c814c6)) ([Mariusz Nowak](https://github.com/medikoo))

### Maintenance Improvements

- **Log:** Make `log` internal logic reusable ([#102](https://github.com/serverless/utils/pull/102)) ([c7338bf](https://github.com/serverless/utils/commit/c7338bfc3cd9423c3fc8969bf20b938e03e6bdda)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.7.0](https://github.com/serverless/utils/compare/v5.6.0...v5.7.0) (2021-08-17)

### Features

- Introduce `get-notifications-mode` util ([#100](https://github.com/serverless/utils/pull/100)) ([a1585c9](https://github.com/serverless/utils/commit/a1585c971d821fc53c4238b35dc50a041652f27b)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [5.6.0](https://github.com/serverless/utils/compare/v5.5.0...v5.6.0) (2021-07-21)

### Features

- Recognize continue prompts in history with `_continuation_` ([#94](https://github.com/serverless/utils/pull/94)) ([5cd0414](https://github.com/serverless/utils/commit/5cd04148e066b80c2135edf9eb05fb4fb5b09e56)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [5.5.0](https://github.com/serverless/utils/compare/v5.4.0...v5.5.0) (2021-07-20)

### Features

- Add `prompt-with-history` ([#92](https://github.com/serverless/utils/pull/92)) ([7f094ef](https://github.com/serverless/utils/commit/7f094ef659f9295884c5679c398f609da8dd1ba7)) ([Piotr Grzesik](https://github.com/pgrzesik))
- Add support for recording `startedAt` and `finalizedAt` in `StepHistory` ([#92](https://github.com/serverless/utils/pull/92)) ([483cb08](https://github.com/serverless/utils/commit/483cb082eaa9d049d862554e6a7d6290031d58db)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [5.4.0](https://github.com/serverless/utils/compare/v5.3.0...v5.4.0) (2021-07-16)

### Features

- **Backend notifications resolver:**
  - Introduce alternative notifications mode settings ([#90](https://github.com/serverless/utils/pull/90)) ([d3ffc7a](https://github.com/serverless/utils/commit/d3ffc7aac78e8a3adf0d2a126c2ba8e2df2592f6)) ([Mariusz Nowak](https://github.com/medikoo))
  - Support forcing display of notifications ([#90](https://github.com/serverless/utils/pull/90)) ([84c9599](https://github.com/serverless/utils/commit/84c9599864f288389101e8876aba4b8ac6683493)) ([Mariusz Nowak](https://github.com/medikoo))

## [5.3.0](https://github.com/serverless/utils/compare/v5.2.0...v5.3.0) (2021-06-15)

### Features

- Add `StepHistory` class in `telemetry` ([#88](https://github.com/serverless/utils/pull/88)) ([20b8df5](https://github.com/serverless/utils/commit/20b8df5ba5ec71328930290348ddd99f0938145a)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [5.2.0](https://github.com/serverless/utils/compare/v5.1.0...v5.2.0) (2021-05-27)

### Features

- Support disabling entity in `log` util ([#86](https://github.com/serverless/utils/pull/86)) ([df601f5](https://github.com/serverless/utils/commit/df601f5aca5ea7a3ecd8e9a8ddde9f233864acc1)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [5.1.0](https://github.com/serverless/utils/compare/v5.0.0...v5.1.0) (2021-05-19)

### Features

- Add `download` util ([#84](https://github.com/serverless/utils/pull/84)) ([888a583](https://github.com/serverless/utils/commit/888a58328099f1860fac8305fe32bb05325f039a)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [5.0.0](https://github.com/serverless/utils/compare/v4.1.0...v5.0.0) (2021-05-12)

### ⚠ BREAKING CHANGES

- Inquirer prompt will have no prefix instead of `Serverless:`. If you wish, to still use `Serverless:` prefix, override it on the client side.

### Features

- Remove `Serverless:` prefix from `inquirer` ([#82](https://github.com/serverless/utils/pull/82)) ([edb8593](https://github.com/serverless/utils/commit/edb8593fbd2524c3ba0e08fc1e143eb872cf9b86)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [4.1.0](https://github.com/serverless/utils/compare/v4.0.1...v4.1.0) (2021-04-20)

### Features

- Allow disabling backend notifications via `SLS_NOTIFICATIONS_MODE` env var ([#80](https://github.com/serverless/utils/pull/80)) ([e822033](https://github.com/serverless/utils/commit/e822033a4025415cc076f3bb367e1dea9bec28f1)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [4.0.1](https://github.com/serverless/utils/compare/v4.0.0...v4.0.1) (2021-04-01)

### Features

- Add a dev env metrics url for China user

## [4.0.0](https://github.com/serverless/utils/compare/v3.1.0...v4.0.0) (2021-03-11)

### ⚠ BREAKING CHANGES

- Expose analytics server URL unconditionally (and not just in non-CI environments). It is breaking as it might impact how analytics reporting works in older version of the Framework and might pollute data with unexpected events coming from CI deployments. Additonally, it will cause notifications to be triggered in CI environments as well.

### Features

- Expose analytics server URL unconditionally (and not just in non-CI environments) ([#76](https://github.com/serverless/utils/pull/76)) ([9f7143e](https://github.com/serverless/utils/commit/9f7143e8bdc5f036251ca4f6b54e7292c0803648)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [3.1.0](https://github.com/serverless/utils/compare/v3.0.0...v3.1.0) (2021-01-29)

### Features

- Add account-related methods ([#73](https://github.com/serverless/utils/pull/73)) ([c77df3c](https://github.com/serverless/utils/commit/c77df3ccf45e96b790ef508a50939ce29394eded)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [3.0.0](https://github.com/serverless/utils/compare/v2.2.0...v3.0.0) (2021-01-26)

### ⚠ BREAKING CHANGES

- **Config:**
  - Removed `getGlobalConfig`
  - Removed support for all `rc`-discoverable files (only supports local folder, `~/` and `~/.config` locations)
  - Update will modify local configuration file if found, otherwise it will modify global (previously it always modified global config)

### Features

- **Config:** Introduce new config resolution ([#70](https://github.com/serverless/utils/pull/70)) ([3bff1b4](https://github.com/serverless/utils/commit/3bff1b4fe70e0d011ddb185f3fe6b206ced03aad)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [2.2.0](https://github.com/serverless/utils/compare/v2.1.0...v2.2.0) (2021-01-05)

### Features

- `cloudformationSchema` util ([#66](https://github.com/serverless/utils/issues/66)) ([74adfa8](https://github.com/serverless/utils/commit/74adfa8d5a59f4838cd9c59d0b049ed12d5daa38)) ([Frédéric Barthelet](https://github.com/fredericbarthelet))

## [2.1.0](https://github.com/serverless/utils/compare/v2.0.0...v2.1.0) (2020-12-22)

### Features

- Add general logging utility ([#63](https://github.com/serverless/utils/issues/63)) ([58ccc3c](https://github.com/serverless/utils/commit/58ccc3c0ec741ce173982eb4b897cca2af6135b6)) ([Piotr Grzesik](https://github.com/pgrzesik))

### Bug Fixes

- Ensure that getConfig falls back to getGlobalConfig on error ([#62](https://github.com/serverless/utils/pull/62)) ([4f1251d](https://github.com/serverless/utils/commit/4f1251dc0500bb6f8c357832f243ca0524476fd9)) ([Piotr Grzesik](https://github.com/pgrzesik))
- Ensure that invalid user config is handled gracefully ([#62](https://github.com/serverless/utils/pull/62)) ([9537df2](https://github.com/serverless/utils/commit/9537df2b06bb7560ff0f0ad8f5dc4779cfcf9332)) ([Piotr Grzesik](https://github.com/pgrzesik))

## [2.0.0](https://github.com/serverless/utils/compare/v1.2.0...v2.0.0) (2020-09-21)

### ⚠ BREAKING CHANGES

- Node.js version 10 or later is required (dropped support for v6 and v8)

### Features

- Integrate @serverless/inquirer project ([#59](https://github.com/serverless/utils/pull/59)) ([3fc274a](https://github.com/serverless/utils/commit/3fc274a413ac04f34daee2abeff1b969686182c6)) ([Mariusz Nowak](https://github.com/medikoo))
- Drop support for Node.js v8 ([6cba266](https://github.com/serverless/utils/commit/6cba266861c9c55e4e897f896bb76cd265b0f80a)) ([Mariusz Nowak](https://github.com/medikoo))

## [1.2.0](https://github.com/serverless/utils/compare/v1.1.0...v1.2.0) (2020-06-26)

### Features

- Smarter notification resolution logic, also with support for unconditional notifications ([#56](https://github.com/serverless/utils/pull/56)) ([6329b1a](https://github.com/serverless/utils/commit/6329b1a03ce1ed57c8c922ea021a26f911d6e5c3)) ([Mariusz Nowak](https://github.com/medikoo))
- Configure AWS metrics URL ([#56](https://github.com/serverless/utils/pull/56)) ([c271b3f](https://github.com/serverless/utils/commit/c271b3f0a0e0901a3c45d5726c3e32b54a5a36ba)) ([Mariusz Nowak](https://github.com/medikoo))
- Provide eventual fallback to extended response format ([#56](https://github.com/serverless/utils/pull/56)) ([86ddb95](https://github.com/serverless/utils/commit/86ddb9575d635cdcf326436fe571cc1b2c5818b7)) ([Mariusz Nowak](https://github.com/medikoo))

## [1.1.0](https://github.com/serverless/utils/compare/v1.0.0...v1.1.0) (2020-06-15)

### Features

- **Analytics & Notifications URL**
  - By default do not expose analytics url in CI environment ([05ea565](https://github.com/serverless/utils/commit/05ea565a1642a9da10cb4770ef75ae70c4443a22)) ([Mariusz Nowak](https://github.com/medikoo))
  - Support override of analytics url via `SLS_ANALYTICS_URL` env var ([66ff290](https://github.com/serverless/utils/commit/66ff290a5c06b1b082e377eb3d8ead46b42c4f95)) ([Mariusz Nowak](https://github.com/medikoo))

### [1.0.0](https://github.com/serverless/utils/compare/v0.0.20...v1.0.0) (2020-06-12)

A new beginning. All old utilities were removed. Project now serves high level utilities for Serverless Framework and Component CLI's

### Features

- `analyticsAndNotificationsUrl` util ([b581cef](https://github.com/serverless/utils/commit/b581cef03961a0ee29e2fc9da577a7c0e600e915))
- `config` util ([aeb48d5](https://github.com/serverless/utils/commit/aeb48d58dab279e8c84db2f84b3515ba71815575))
- `isInChina` util ([c457d8c](https://github.com/serverless/utils/commit/c457d8c4e9829d9ab6d38a84e0f7c41809379f43))
- `processBackendNotificationRequest` util ([5249e2b](https://github.com/serverless/utils/commit/5249e2b9a09e72126382e902abeea38d9a089398))
