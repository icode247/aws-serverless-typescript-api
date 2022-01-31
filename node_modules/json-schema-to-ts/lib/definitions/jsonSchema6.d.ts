import { JSONSchema6Definition, JSONSchema6 } from "json-schema";
import { O } from "ts-toolbelt";
export declare type JSONSchema6DefinitionWithoutInterface = JSONSchema6Definition extends infer S ? S extends JSONSchema6 ? O.Update<S, "const" | "enum" | "not", unknown> : S : never;
