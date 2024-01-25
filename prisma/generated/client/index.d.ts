
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Personaluser
 * 
 */
export type Personaluser = $Result.DefaultSelection<Prisma.$PersonaluserPayload>
/**
 * Model Businessuser
 * 
 */
export type Businessuser = $Result.DefaultSelection<Prisma.$BusinessuserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personalusers
 * const personalusers = await prisma.personaluser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personalusers
   * const personalusers = await prisma.personaluser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.personaluser`: Exposes CRUD operations for the **Personaluser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personalusers
    * const personalusers = await prisma.personaluser.findMany()
    * ```
    */
  get personaluser(): Prisma.PersonaluserDelegate<ExtArgs>;

  /**
   * `prisma.businessuser`: Exposes CRUD operations for the **Businessuser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businessusers
    * const businessusers = await prisma.businessuser.findMany()
    * ```
    */
  get businessuser(): Prisma.BusinessuserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Personaluser: 'Personaluser',
    Businessuser: 'Businessuser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'personaluser' | 'businessuser'
      txIsolationLevel: never
    },
    model: {
      Personaluser: {
        payload: Prisma.$PersonaluserPayload<ExtArgs>
        fields: Prisma.PersonaluserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaluserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaluserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload>
          }
          findFirst: {
            args: Prisma.PersonaluserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaluserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload>
          }
          findMany: {
            args: Prisma.PersonaluserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload>[]
          }
          create: {
            args: Prisma.PersonaluserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload>
          }
          createMany: {
            args: Prisma.PersonaluserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PersonaluserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload>
          }
          update: {
            args: Prisma.PersonaluserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload>
          }
          deleteMany: {
            args: Prisma.PersonaluserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaluserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PersonaluserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonaluserPayload>
          }
          aggregate: {
            args: Prisma.PersonaluserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePersonaluser>
          }
          groupBy: {
            args: Prisma.PersonaluserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PersonaluserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PersonaluserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PersonaluserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PersonaluserCountArgs<ExtArgs>,
            result: $Utils.Optional<PersonaluserCountAggregateOutputType> | number
          }
        }
      }
      Businessuser: {
        payload: Prisma.$BusinessuserPayload<ExtArgs>
        fields: Prisma.BusinessuserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessuserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessuserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload>
          }
          findFirst: {
            args: Prisma.BusinessuserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessuserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload>
          }
          findMany: {
            args: Prisma.BusinessuserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload>[]
          }
          create: {
            args: Prisma.BusinessuserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload>
          }
          createMany: {
            args: Prisma.BusinessuserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BusinessuserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload>
          }
          update: {
            args: Prisma.BusinessuserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload>
          }
          deleteMany: {
            args: Prisma.BusinessuserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessuserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BusinessuserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessuserPayload>
          }
          aggregate: {
            args: Prisma.BusinessuserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBusinessuser>
          }
          groupBy: {
            args: Prisma.BusinessuserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BusinessuserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BusinessuserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.BusinessuserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.BusinessuserCountArgs<ExtArgs>,
            result: $Utils.Optional<BusinessuserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Personaluser
   */

  export type AggregatePersonaluser = {
    _count: PersonaluserCountAggregateOutputType | null
    _min: PersonaluserMinAggregateOutputType | null
    _max: PersonaluserMaxAggregateOutputType | null
  }

  export type PersonaluserMinAggregateOutputType = {
    id: string | null
    agree_tos: boolean | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonaluserMaxAggregateOutputType = {
    id: string | null
    agree_tos: boolean | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonaluserCountAggregateOutputType = {
    id: number
    agree_tos: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonaluserMinAggregateInputType = {
    id?: true
    agree_tos?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonaluserMaxAggregateInputType = {
    id?: true
    agree_tos?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonaluserCountAggregateInputType = {
    id?: true
    agree_tos?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonaluserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personaluser to aggregate.
     */
    where?: PersonaluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalusers to fetch.
     */
    orderBy?: PersonaluserOrderByWithRelationInput | PersonaluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personalusers
    **/
    _count?: true | PersonaluserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaluserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaluserMaxAggregateInputType
  }

  export type GetPersonaluserAggregateType<T extends PersonaluserAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonaluser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonaluser[P]>
      : GetScalarType<T[P], AggregatePersonaluser[P]>
  }




  export type PersonaluserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaluserWhereInput
    orderBy?: PersonaluserOrderByWithAggregationInput | PersonaluserOrderByWithAggregationInput[]
    by: PersonaluserScalarFieldEnum[] | PersonaluserScalarFieldEnum
    having?: PersonaluserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaluserCountAggregateInputType | true
    _min?: PersonaluserMinAggregateInputType
    _max?: PersonaluserMaxAggregateInputType
  }

  export type PersonaluserGroupByOutputType = {
    id: string
    agree_tos: boolean
    email: string
    name: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: PersonaluserCountAggregateOutputType | null
    _min: PersonaluserMinAggregateOutputType | null
    _max: PersonaluserMaxAggregateOutputType | null
  }

  type GetPersonaluserGroupByPayload<T extends PersonaluserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaluserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaluserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaluserGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaluserGroupByOutputType[P]>
        }
      >
    >


  export type PersonaluserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agree_tos?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["personaluser"]>

  export type PersonaluserSelectScalar = {
    id?: boolean
    agree_tos?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PersonaluserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personaluser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agree_tos: boolean
      email: string
      name: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personaluser"]>
    composites: {}
  }


  type PersonaluserGetPayload<S extends boolean | null | undefined | PersonaluserDefaultArgs> = $Result.GetResult<Prisma.$PersonaluserPayload, S>

  type PersonaluserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonaluserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonaluserCountAggregateInputType | true
    }

  export interface PersonaluserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personaluser'], meta: { name: 'Personaluser' } }
    /**
     * Find zero or one Personaluser that matches the filter.
     * @param {PersonaluserFindUniqueArgs} args - Arguments to find a Personaluser
     * @example
     * // Get one Personaluser
     * const personaluser = await prisma.personaluser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonaluserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PersonaluserFindUniqueArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Personaluser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonaluserFindUniqueOrThrowArgs} args - Arguments to find a Personaluser
     * @example
     * // Get one Personaluser
     * const personaluser = await prisma.personaluser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonaluserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonaluserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Personaluser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaluserFindFirstArgs} args - Arguments to find a Personaluser
     * @example
     * // Get one Personaluser
     * const personaluser = await prisma.personaluser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonaluserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonaluserFindFirstArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Personaluser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaluserFindFirstOrThrowArgs} args - Arguments to find a Personaluser
     * @example
     * // Get one Personaluser
     * const personaluser = await prisma.personaluser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonaluserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonaluserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Personalusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaluserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personalusers
     * const personalusers = await prisma.personaluser.findMany()
     * 
     * // Get first 10 Personalusers
     * const personalusers = await prisma.personaluser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personaluserWithIdOnly = await prisma.personaluser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonaluserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonaluserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Personaluser.
     * @param {PersonaluserCreateArgs} args - Arguments to create a Personaluser.
     * @example
     * // Create one Personaluser
     * const Personaluser = await prisma.personaluser.create({
     *   data: {
     *     // ... data to create a Personaluser
     *   }
     * })
     * 
    **/
    create<T extends PersonaluserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonaluserCreateArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Personalusers.
     *     @param {PersonaluserCreateManyArgs} args - Arguments to create many Personalusers.
     *     @example
     *     // Create many Personalusers
     *     const personaluser = await prisma.personaluser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonaluserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonaluserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personaluser.
     * @param {PersonaluserDeleteArgs} args - Arguments to delete one Personaluser.
     * @example
     * // Delete one Personaluser
     * const Personaluser = await prisma.personaluser.delete({
     *   where: {
     *     // ... filter to delete one Personaluser
     *   }
     * })
     * 
    **/
    delete<T extends PersonaluserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PersonaluserDeleteArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Personaluser.
     * @param {PersonaluserUpdateArgs} args - Arguments to update one Personaluser.
     * @example
     * // Update one Personaluser
     * const personaluser = await prisma.personaluser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonaluserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonaluserUpdateArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Personalusers.
     * @param {PersonaluserDeleteManyArgs} args - Arguments to filter Personalusers to delete.
     * @example
     * // Delete a few Personalusers
     * const { count } = await prisma.personaluser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonaluserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonaluserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personalusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaluserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personalusers
     * const personaluser = await prisma.personaluser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonaluserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PersonaluserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personaluser.
     * @param {PersonaluserUpsertArgs} args - Arguments to update or create a Personaluser.
     * @example
     * // Update or create a Personaluser
     * const personaluser = await prisma.personaluser.upsert({
     *   create: {
     *     // ... data to create a Personaluser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personaluser we want to update
     *   }
     * })
    **/
    upsert<T extends PersonaluserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PersonaluserUpsertArgs<ExtArgs>>
    ): Prisma__PersonaluserClient<$Result.GetResult<Prisma.$PersonaluserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Personalusers that matches the filter.
     * @param {PersonaluserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const personaluser = await prisma.personaluser.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PersonaluserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Personaluser.
     * @param {PersonaluserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const personaluser = await prisma.personaluser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PersonaluserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Personalusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaluserCountArgs} args - Arguments to filter Personalusers to count.
     * @example
     * // Count the number of Personalusers
     * const count = await prisma.personaluser.count({
     *   where: {
     *     // ... the filter for the Personalusers we want to count
     *   }
     * })
    **/
    count<T extends PersonaluserCountArgs>(
      args?: Subset<T, PersonaluserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaluserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personaluser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaluserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaluserAggregateArgs>(args: Subset<T, PersonaluserAggregateArgs>): Prisma.PrismaPromise<GetPersonaluserAggregateType<T>>

    /**
     * Group by Personaluser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaluserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonaluserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaluserGroupByArgs['orderBy'] }
        : { orderBy?: PersonaluserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonaluserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaluserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personaluser model
   */
  readonly fields: PersonaluserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personaluser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaluserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Personaluser model
   */ 
  interface PersonaluserFieldRefs {
    readonly id: FieldRef<"Personaluser", 'String'>
    readonly agree_tos: FieldRef<"Personaluser", 'Boolean'>
    readonly email: FieldRef<"Personaluser", 'String'>
    readonly name: FieldRef<"Personaluser", 'String'>
    readonly password: FieldRef<"Personaluser", 'String'>
    readonly createdAt: FieldRef<"Personaluser", 'DateTime'>
    readonly updatedAt: FieldRef<"Personaluser", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Personaluser findUnique
   */
  export type PersonaluserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * Filter, which Personaluser to fetch.
     */
    where: PersonaluserWhereUniqueInput
  }


  /**
   * Personaluser findUniqueOrThrow
   */
  export type PersonaluserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * Filter, which Personaluser to fetch.
     */
    where: PersonaluserWhereUniqueInput
  }


  /**
   * Personaluser findFirst
   */
  export type PersonaluserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * Filter, which Personaluser to fetch.
     */
    where?: PersonaluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalusers to fetch.
     */
    orderBy?: PersonaluserOrderByWithRelationInput | PersonaluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personalusers.
     */
    cursor?: PersonaluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personalusers.
     */
    distinct?: PersonaluserScalarFieldEnum | PersonaluserScalarFieldEnum[]
  }


  /**
   * Personaluser findFirstOrThrow
   */
  export type PersonaluserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * Filter, which Personaluser to fetch.
     */
    where?: PersonaluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalusers to fetch.
     */
    orderBy?: PersonaluserOrderByWithRelationInput | PersonaluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personalusers.
     */
    cursor?: PersonaluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personalusers.
     */
    distinct?: PersonaluserScalarFieldEnum | PersonaluserScalarFieldEnum[]
  }


  /**
   * Personaluser findMany
   */
  export type PersonaluserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * Filter, which Personalusers to fetch.
     */
    where?: PersonaluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalusers to fetch.
     */
    orderBy?: PersonaluserOrderByWithRelationInput | PersonaluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personalusers.
     */
    cursor?: PersonaluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalusers.
     */
    skip?: number
    distinct?: PersonaluserScalarFieldEnum | PersonaluserScalarFieldEnum[]
  }


  /**
   * Personaluser create
   */
  export type PersonaluserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * The data needed to create a Personaluser.
     */
    data: XOR<PersonaluserCreateInput, PersonaluserUncheckedCreateInput>
  }


  /**
   * Personaluser createMany
   */
  export type PersonaluserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personalusers.
     */
    data: PersonaluserCreateManyInput | PersonaluserCreateManyInput[]
  }


  /**
   * Personaluser update
   */
  export type PersonaluserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * The data needed to update a Personaluser.
     */
    data: XOR<PersonaluserUpdateInput, PersonaluserUncheckedUpdateInput>
    /**
     * Choose, which Personaluser to update.
     */
    where: PersonaluserWhereUniqueInput
  }


  /**
   * Personaluser updateMany
   */
  export type PersonaluserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personalusers.
     */
    data: XOR<PersonaluserUpdateManyMutationInput, PersonaluserUncheckedUpdateManyInput>
    /**
     * Filter which Personalusers to update
     */
    where?: PersonaluserWhereInput
  }


  /**
   * Personaluser upsert
   */
  export type PersonaluserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * The filter to search for the Personaluser to update in case it exists.
     */
    where: PersonaluserWhereUniqueInput
    /**
     * In case the Personaluser found by the `where` argument doesn't exist, create a new Personaluser with this data.
     */
    create: XOR<PersonaluserCreateInput, PersonaluserUncheckedCreateInput>
    /**
     * In case the Personaluser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaluserUpdateInput, PersonaluserUncheckedUpdateInput>
  }


  /**
   * Personaluser delete
   */
  export type PersonaluserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
    /**
     * Filter which Personaluser to delete.
     */
    where: PersonaluserWhereUniqueInput
  }


  /**
   * Personaluser deleteMany
   */
  export type PersonaluserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personalusers to delete
     */
    where?: PersonaluserWhereInput
  }


  /**
   * Personaluser findRaw
   */
  export type PersonaluserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Personaluser aggregateRaw
   */
  export type PersonaluserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Personaluser without action
   */
  export type PersonaluserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personaluser
     */
    select?: PersonaluserSelect<ExtArgs> | null
  }



  /**
   * Model Businessuser
   */

  export type AggregateBusinessuser = {
    _count: BusinessuserCountAggregateOutputType | null
    _min: BusinessuserMinAggregateOutputType | null
    _max: BusinessuserMaxAggregateOutputType | null
  }

  export type BusinessuserMinAggregateOutputType = {
    id: string | null
    agree_contact_sales: boolean | null
    agree_tos_b: boolean | null
    company_name: string | null
    email_b: string | null
    employees: string | null
    name_b: string | null
    password_b: string | null
    position: string | null
    storage_needs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessuserMaxAggregateOutputType = {
    id: string | null
    agree_contact_sales: boolean | null
    agree_tos_b: boolean | null
    company_name: string | null
    email_b: string | null
    employees: string | null
    name_b: string | null
    password_b: string | null
    position: string | null
    storage_needs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessuserCountAggregateOutputType = {
    id: number
    agree_contact_sales: number
    agree_tos_b: number
    company_name: number
    email_b: number
    employees: number
    name_b: number
    password_b: number
    position: number
    storage_needs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessuserMinAggregateInputType = {
    id?: true
    agree_contact_sales?: true
    agree_tos_b?: true
    company_name?: true
    email_b?: true
    employees?: true
    name_b?: true
    password_b?: true
    position?: true
    storage_needs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessuserMaxAggregateInputType = {
    id?: true
    agree_contact_sales?: true
    agree_tos_b?: true
    company_name?: true
    email_b?: true
    employees?: true
    name_b?: true
    password_b?: true
    position?: true
    storage_needs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessuserCountAggregateInputType = {
    id?: true
    agree_contact_sales?: true
    agree_tos_b?: true
    company_name?: true
    email_b?: true
    employees?: true
    name_b?: true
    password_b?: true
    position?: true
    storage_needs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessuserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businessuser to aggregate.
     */
    where?: BusinessuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businessusers to fetch.
     */
    orderBy?: BusinessuserOrderByWithRelationInput | BusinessuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businessusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businessusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businessusers
    **/
    _count?: true | BusinessuserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessuserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessuserMaxAggregateInputType
  }

  export type GetBusinessuserAggregateType<T extends BusinessuserAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessuser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessuser[P]>
      : GetScalarType<T[P], AggregateBusinessuser[P]>
  }




  export type BusinessuserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessuserWhereInput
    orderBy?: BusinessuserOrderByWithAggregationInput | BusinessuserOrderByWithAggregationInput[]
    by: BusinessuserScalarFieldEnum[] | BusinessuserScalarFieldEnum
    having?: BusinessuserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessuserCountAggregateInputType | true
    _min?: BusinessuserMinAggregateInputType
    _max?: BusinessuserMaxAggregateInputType
  }

  export type BusinessuserGroupByOutputType = {
    id: string
    agree_contact_sales: boolean
    agree_tos_b: boolean
    company_name: string
    email_b: string
    employees: string
    name_b: string
    password_b: string
    position: string
    storage_needs: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessuserCountAggregateOutputType | null
    _min: BusinessuserMinAggregateOutputType | null
    _max: BusinessuserMaxAggregateOutputType | null
  }

  type GetBusinessuserGroupByPayload<T extends BusinessuserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessuserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessuserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessuserGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessuserGroupByOutputType[P]>
        }
      >
    >


  export type BusinessuserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agree_contact_sales?: boolean
    agree_tos_b?: boolean
    company_name?: boolean
    email_b?: boolean
    employees?: boolean
    name_b?: boolean
    password_b?: boolean
    position?: boolean
    storage_needs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessuser"]>

  export type BusinessuserSelectScalar = {
    id?: boolean
    agree_contact_sales?: boolean
    agree_tos_b?: boolean
    company_name?: boolean
    email_b?: boolean
    employees?: boolean
    name_b?: boolean
    password_b?: boolean
    position?: boolean
    storage_needs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BusinessuserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Businessuser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agree_contact_sales: boolean
      agree_tos_b: boolean
      company_name: string
      email_b: string
      employees: string
      name_b: string
      password_b: string
      position: string
      storage_needs: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessuser"]>
    composites: {}
  }


  type BusinessuserGetPayload<S extends boolean | null | undefined | BusinessuserDefaultArgs> = $Result.GetResult<Prisma.$BusinessuserPayload, S>

  type BusinessuserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusinessuserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusinessuserCountAggregateInputType | true
    }

  export interface BusinessuserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Businessuser'], meta: { name: 'Businessuser' } }
    /**
     * Find zero or one Businessuser that matches the filter.
     * @param {BusinessuserFindUniqueArgs} args - Arguments to find a Businessuser
     * @example
     * // Get one Businessuser
     * const businessuser = await prisma.businessuser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessuserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessuserFindUniqueArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Businessuser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessuserFindUniqueOrThrowArgs} args - Arguments to find a Businessuser
     * @example
     * // Get one Businessuser
     * const businessuser = await prisma.businessuser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessuserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessuserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Businessuser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessuserFindFirstArgs} args - Arguments to find a Businessuser
     * @example
     * // Get one Businessuser
     * const businessuser = await prisma.businessuser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessuserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessuserFindFirstArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Businessuser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessuserFindFirstOrThrowArgs} args - Arguments to find a Businessuser
     * @example
     * // Get one Businessuser
     * const businessuser = await prisma.businessuser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessuserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessuserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Businessusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessuserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businessusers
     * const businessusers = await prisma.businessuser.findMany()
     * 
     * // Get first 10 Businessusers
     * const businessusers = await prisma.businessuser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessuserWithIdOnly = await prisma.businessuser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessuserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessuserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Businessuser.
     * @param {BusinessuserCreateArgs} args - Arguments to create a Businessuser.
     * @example
     * // Create one Businessuser
     * const Businessuser = await prisma.businessuser.create({
     *   data: {
     *     // ... data to create a Businessuser
     *   }
     * })
     * 
    **/
    create<T extends BusinessuserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessuserCreateArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Businessusers.
     *     @param {BusinessuserCreateManyArgs} args - Arguments to create many Businessusers.
     *     @example
     *     // Create many Businessusers
     *     const businessuser = await prisma.businessuser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessuserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessuserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Businessuser.
     * @param {BusinessuserDeleteArgs} args - Arguments to delete one Businessuser.
     * @example
     * // Delete one Businessuser
     * const Businessuser = await prisma.businessuser.delete({
     *   where: {
     *     // ... filter to delete one Businessuser
     *   }
     * })
     * 
    **/
    delete<T extends BusinessuserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessuserDeleteArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Businessuser.
     * @param {BusinessuserUpdateArgs} args - Arguments to update one Businessuser.
     * @example
     * // Update one Businessuser
     * const businessuser = await prisma.businessuser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessuserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessuserUpdateArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Businessusers.
     * @param {BusinessuserDeleteManyArgs} args - Arguments to filter Businessusers to delete.
     * @example
     * // Delete a few Businessusers
     * const { count } = await prisma.businessuser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessuserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessuserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businessusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessuserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businessusers
     * const businessuser = await prisma.businessuser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessuserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessuserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Businessuser.
     * @param {BusinessuserUpsertArgs} args - Arguments to update or create a Businessuser.
     * @example
     * // Update or create a Businessuser
     * const businessuser = await prisma.businessuser.upsert({
     *   create: {
     *     // ... data to create a Businessuser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Businessuser we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessuserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessuserUpsertArgs<ExtArgs>>
    ): Prisma__BusinessuserClient<$Result.GetResult<Prisma.$BusinessuserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Businessusers that matches the filter.
     * @param {BusinessuserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const businessuser = await prisma.businessuser.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BusinessuserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Businessuser.
     * @param {BusinessuserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const businessuser = await prisma.businessuser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BusinessuserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Businessusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessuserCountArgs} args - Arguments to filter Businessusers to count.
     * @example
     * // Count the number of Businessusers
     * const count = await prisma.businessuser.count({
     *   where: {
     *     // ... the filter for the Businessusers we want to count
     *   }
     * })
    **/
    count<T extends BusinessuserCountArgs>(
      args?: Subset<T, BusinessuserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessuserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Businessuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessuserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessuserAggregateArgs>(args: Subset<T, BusinessuserAggregateArgs>): Prisma.PrismaPromise<GetBusinessuserAggregateType<T>>

    /**
     * Group by Businessuser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessuserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessuserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessuserGroupByArgs['orderBy'] }
        : { orderBy?: BusinessuserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessuserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessuserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Businessuser model
   */
  readonly fields: BusinessuserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Businessuser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessuserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Businessuser model
   */ 
  interface BusinessuserFieldRefs {
    readonly id: FieldRef<"Businessuser", 'String'>
    readonly agree_contact_sales: FieldRef<"Businessuser", 'Boolean'>
    readonly agree_tos_b: FieldRef<"Businessuser", 'Boolean'>
    readonly company_name: FieldRef<"Businessuser", 'String'>
    readonly email_b: FieldRef<"Businessuser", 'String'>
    readonly employees: FieldRef<"Businessuser", 'String'>
    readonly name_b: FieldRef<"Businessuser", 'String'>
    readonly password_b: FieldRef<"Businessuser", 'String'>
    readonly position: FieldRef<"Businessuser", 'String'>
    readonly storage_needs: FieldRef<"Businessuser", 'String'>
    readonly createdAt: FieldRef<"Businessuser", 'DateTime'>
    readonly updatedAt: FieldRef<"Businessuser", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Businessuser findUnique
   */
  export type BusinessuserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * Filter, which Businessuser to fetch.
     */
    where: BusinessuserWhereUniqueInput
  }


  /**
   * Businessuser findUniqueOrThrow
   */
  export type BusinessuserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * Filter, which Businessuser to fetch.
     */
    where: BusinessuserWhereUniqueInput
  }


  /**
   * Businessuser findFirst
   */
  export type BusinessuserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * Filter, which Businessuser to fetch.
     */
    where?: BusinessuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businessusers to fetch.
     */
    orderBy?: BusinessuserOrderByWithRelationInput | BusinessuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businessusers.
     */
    cursor?: BusinessuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businessusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businessusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businessusers.
     */
    distinct?: BusinessuserScalarFieldEnum | BusinessuserScalarFieldEnum[]
  }


  /**
   * Businessuser findFirstOrThrow
   */
  export type BusinessuserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * Filter, which Businessuser to fetch.
     */
    where?: BusinessuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businessusers to fetch.
     */
    orderBy?: BusinessuserOrderByWithRelationInput | BusinessuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businessusers.
     */
    cursor?: BusinessuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businessusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businessusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businessusers.
     */
    distinct?: BusinessuserScalarFieldEnum | BusinessuserScalarFieldEnum[]
  }


  /**
   * Businessuser findMany
   */
  export type BusinessuserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * Filter, which Businessusers to fetch.
     */
    where?: BusinessuserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businessusers to fetch.
     */
    orderBy?: BusinessuserOrderByWithRelationInput | BusinessuserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businessusers.
     */
    cursor?: BusinessuserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businessusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businessusers.
     */
    skip?: number
    distinct?: BusinessuserScalarFieldEnum | BusinessuserScalarFieldEnum[]
  }


  /**
   * Businessuser create
   */
  export type BusinessuserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * The data needed to create a Businessuser.
     */
    data: XOR<BusinessuserCreateInput, BusinessuserUncheckedCreateInput>
  }


  /**
   * Businessuser createMany
   */
  export type BusinessuserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businessusers.
     */
    data: BusinessuserCreateManyInput | BusinessuserCreateManyInput[]
  }


  /**
   * Businessuser update
   */
  export type BusinessuserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * The data needed to update a Businessuser.
     */
    data: XOR<BusinessuserUpdateInput, BusinessuserUncheckedUpdateInput>
    /**
     * Choose, which Businessuser to update.
     */
    where: BusinessuserWhereUniqueInput
  }


  /**
   * Businessuser updateMany
   */
  export type BusinessuserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businessusers.
     */
    data: XOR<BusinessuserUpdateManyMutationInput, BusinessuserUncheckedUpdateManyInput>
    /**
     * Filter which Businessusers to update
     */
    where?: BusinessuserWhereInput
  }


  /**
   * Businessuser upsert
   */
  export type BusinessuserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * The filter to search for the Businessuser to update in case it exists.
     */
    where: BusinessuserWhereUniqueInput
    /**
     * In case the Businessuser found by the `where` argument doesn't exist, create a new Businessuser with this data.
     */
    create: XOR<BusinessuserCreateInput, BusinessuserUncheckedCreateInput>
    /**
     * In case the Businessuser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessuserUpdateInput, BusinessuserUncheckedUpdateInput>
  }


  /**
   * Businessuser delete
   */
  export type BusinessuserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
    /**
     * Filter which Businessuser to delete.
     */
    where: BusinessuserWhereUniqueInput
  }


  /**
   * Businessuser deleteMany
   */
  export type BusinessuserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businessusers to delete
     */
    where?: BusinessuserWhereInput
  }


  /**
   * Businessuser findRaw
   */
  export type BusinessuserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Businessuser aggregateRaw
   */
  export type BusinessuserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Businessuser without action
   */
  export type BusinessuserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Businessuser
     */
    select?: BusinessuserSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const PersonaluserScalarFieldEnum: {
    id: 'id',
    agree_tos: 'agree_tos',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonaluserScalarFieldEnum = (typeof PersonaluserScalarFieldEnum)[keyof typeof PersonaluserScalarFieldEnum]


  export const BusinessuserScalarFieldEnum: {
    id: 'id',
    agree_contact_sales: 'agree_contact_sales',
    agree_tos_b: 'agree_tos_b',
    company_name: 'company_name',
    email_b: 'email_b',
    employees: 'employees',
    name_b: 'name_b',
    password_b: 'password_b',
    position: 'position',
    storage_needs: 'storage_needs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessuserScalarFieldEnum = (typeof BusinessuserScalarFieldEnum)[keyof typeof BusinessuserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonaluserWhereInput = {
    AND?: PersonaluserWhereInput | PersonaluserWhereInput[]
    OR?: PersonaluserWhereInput[]
    NOT?: PersonaluserWhereInput | PersonaluserWhereInput[]
    id?: StringFilter<"Personaluser"> | string
    agree_tos?: BoolFilter<"Personaluser"> | boolean
    email?: StringFilter<"Personaluser"> | string
    name?: StringFilter<"Personaluser"> | string
    password?: StringFilter<"Personaluser"> | string
    createdAt?: DateTimeFilter<"Personaluser"> | Date | string
    updatedAt?: DateTimeFilter<"Personaluser"> | Date | string
  }

  export type PersonaluserOrderByWithRelationInput = {
    id?: SortOrder
    agree_tos?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonaluserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonaluserWhereInput | PersonaluserWhereInput[]
    OR?: PersonaluserWhereInput[]
    NOT?: PersonaluserWhereInput | PersonaluserWhereInput[]
    agree_tos?: BoolFilter<"Personaluser"> | boolean
    email?: StringFilter<"Personaluser"> | string
    name?: StringFilter<"Personaluser"> | string
    password?: StringFilter<"Personaluser"> | string
    createdAt?: DateTimeFilter<"Personaluser"> | Date | string
    updatedAt?: DateTimeFilter<"Personaluser"> | Date | string
  }, "id">

  export type PersonaluserOrderByWithAggregationInput = {
    id?: SortOrder
    agree_tos?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonaluserCountOrderByAggregateInput
    _max?: PersonaluserMaxOrderByAggregateInput
    _min?: PersonaluserMinOrderByAggregateInput
  }

  export type PersonaluserScalarWhereWithAggregatesInput = {
    AND?: PersonaluserScalarWhereWithAggregatesInput | PersonaluserScalarWhereWithAggregatesInput[]
    OR?: PersonaluserScalarWhereWithAggregatesInput[]
    NOT?: PersonaluserScalarWhereWithAggregatesInput | PersonaluserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Personaluser"> | string
    agree_tos?: BoolWithAggregatesFilter<"Personaluser"> | boolean
    email?: StringWithAggregatesFilter<"Personaluser"> | string
    name?: StringWithAggregatesFilter<"Personaluser"> | string
    password?: StringWithAggregatesFilter<"Personaluser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Personaluser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Personaluser"> | Date | string
  }

  export type BusinessuserWhereInput = {
    AND?: BusinessuserWhereInput | BusinessuserWhereInput[]
    OR?: BusinessuserWhereInput[]
    NOT?: BusinessuserWhereInput | BusinessuserWhereInput[]
    id?: StringFilter<"Businessuser"> | string
    agree_contact_sales?: BoolFilter<"Businessuser"> | boolean
    agree_tos_b?: BoolFilter<"Businessuser"> | boolean
    company_name?: StringFilter<"Businessuser"> | string
    email_b?: StringFilter<"Businessuser"> | string
    employees?: StringFilter<"Businessuser"> | string
    name_b?: StringFilter<"Businessuser"> | string
    password_b?: StringFilter<"Businessuser"> | string
    position?: StringFilter<"Businessuser"> | string
    storage_needs?: StringFilter<"Businessuser"> | string
    createdAt?: DateTimeFilter<"Businessuser"> | Date | string
    updatedAt?: DateTimeFilter<"Businessuser"> | Date | string
  }

  export type BusinessuserOrderByWithRelationInput = {
    id?: SortOrder
    agree_contact_sales?: SortOrder
    agree_tos_b?: SortOrder
    company_name?: SortOrder
    email_b?: SortOrder
    employees?: SortOrder
    name_b?: SortOrder
    password_b?: SortOrder
    position?: SortOrder
    storage_needs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessuserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessuserWhereInput | BusinessuserWhereInput[]
    OR?: BusinessuserWhereInput[]
    NOT?: BusinessuserWhereInput | BusinessuserWhereInput[]
    agree_contact_sales?: BoolFilter<"Businessuser"> | boolean
    agree_tos_b?: BoolFilter<"Businessuser"> | boolean
    company_name?: StringFilter<"Businessuser"> | string
    email_b?: StringFilter<"Businessuser"> | string
    employees?: StringFilter<"Businessuser"> | string
    name_b?: StringFilter<"Businessuser"> | string
    password_b?: StringFilter<"Businessuser"> | string
    position?: StringFilter<"Businessuser"> | string
    storage_needs?: StringFilter<"Businessuser"> | string
    createdAt?: DateTimeFilter<"Businessuser"> | Date | string
    updatedAt?: DateTimeFilter<"Businessuser"> | Date | string
  }, "id">

  export type BusinessuserOrderByWithAggregationInput = {
    id?: SortOrder
    agree_contact_sales?: SortOrder
    agree_tos_b?: SortOrder
    company_name?: SortOrder
    email_b?: SortOrder
    employees?: SortOrder
    name_b?: SortOrder
    password_b?: SortOrder
    position?: SortOrder
    storage_needs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessuserCountOrderByAggregateInput
    _max?: BusinessuserMaxOrderByAggregateInput
    _min?: BusinessuserMinOrderByAggregateInput
  }

  export type BusinessuserScalarWhereWithAggregatesInput = {
    AND?: BusinessuserScalarWhereWithAggregatesInput | BusinessuserScalarWhereWithAggregatesInput[]
    OR?: BusinessuserScalarWhereWithAggregatesInput[]
    NOT?: BusinessuserScalarWhereWithAggregatesInput | BusinessuserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Businessuser"> | string
    agree_contact_sales?: BoolWithAggregatesFilter<"Businessuser"> | boolean
    agree_tos_b?: BoolWithAggregatesFilter<"Businessuser"> | boolean
    company_name?: StringWithAggregatesFilter<"Businessuser"> | string
    email_b?: StringWithAggregatesFilter<"Businessuser"> | string
    employees?: StringWithAggregatesFilter<"Businessuser"> | string
    name_b?: StringWithAggregatesFilter<"Businessuser"> | string
    password_b?: StringWithAggregatesFilter<"Businessuser"> | string
    position?: StringWithAggregatesFilter<"Businessuser"> | string
    storage_needs?: StringWithAggregatesFilter<"Businessuser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Businessuser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Businessuser"> | Date | string
  }

  export type PersonaluserCreateInput = {
    id?: string
    agree_tos: boolean
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonaluserUncheckedCreateInput = {
    id?: string
    agree_tos: boolean
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonaluserUpdateInput = {
    agree_tos?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonaluserUncheckedUpdateInput = {
    agree_tos?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonaluserCreateManyInput = {
    id?: string
    agree_tos: boolean
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonaluserUpdateManyMutationInput = {
    agree_tos?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonaluserUncheckedUpdateManyInput = {
    agree_tos?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessuserCreateInput = {
    id?: string
    agree_contact_sales: boolean
    agree_tos_b: boolean
    company_name: string
    email_b: string
    employees: string
    name_b: string
    password_b: string
    position: string
    storage_needs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessuserUncheckedCreateInput = {
    id?: string
    agree_contact_sales: boolean
    agree_tos_b: boolean
    company_name: string
    email_b: string
    employees: string
    name_b: string
    password_b: string
    position: string
    storage_needs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessuserUpdateInput = {
    agree_contact_sales?: BoolFieldUpdateOperationsInput | boolean
    agree_tos_b?: BoolFieldUpdateOperationsInput | boolean
    company_name?: StringFieldUpdateOperationsInput | string
    email_b?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    name_b?: StringFieldUpdateOperationsInput | string
    password_b?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    storage_needs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessuserUncheckedUpdateInput = {
    agree_contact_sales?: BoolFieldUpdateOperationsInput | boolean
    agree_tos_b?: BoolFieldUpdateOperationsInput | boolean
    company_name?: StringFieldUpdateOperationsInput | string
    email_b?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    name_b?: StringFieldUpdateOperationsInput | string
    password_b?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    storage_needs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessuserCreateManyInput = {
    id?: string
    agree_contact_sales: boolean
    agree_tos_b: boolean
    company_name: string
    email_b: string
    employees: string
    name_b: string
    password_b: string
    position: string
    storage_needs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessuserUpdateManyMutationInput = {
    agree_contact_sales?: BoolFieldUpdateOperationsInput | boolean
    agree_tos_b?: BoolFieldUpdateOperationsInput | boolean
    company_name?: StringFieldUpdateOperationsInput | string
    email_b?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    name_b?: StringFieldUpdateOperationsInput | string
    password_b?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    storage_needs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessuserUncheckedUpdateManyInput = {
    agree_contact_sales?: BoolFieldUpdateOperationsInput | boolean
    agree_tos_b?: BoolFieldUpdateOperationsInput | boolean
    company_name?: StringFieldUpdateOperationsInput | string
    email_b?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    name_b?: StringFieldUpdateOperationsInput | string
    password_b?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    storage_needs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonaluserCountOrderByAggregateInput = {
    id?: SortOrder
    agree_tos?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonaluserMaxOrderByAggregateInput = {
    id?: SortOrder
    agree_tos?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonaluserMinOrderByAggregateInput = {
    id?: SortOrder
    agree_tos?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BusinessuserCountOrderByAggregateInput = {
    id?: SortOrder
    agree_contact_sales?: SortOrder
    agree_tos_b?: SortOrder
    company_name?: SortOrder
    email_b?: SortOrder
    employees?: SortOrder
    name_b?: SortOrder
    password_b?: SortOrder
    position?: SortOrder
    storage_needs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessuserMaxOrderByAggregateInput = {
    id?: SortOrder
    agree_contact_sales?: SortOrder
    agree_tos_b?: SortOrder
    company_name?: SortOrder
    email_b?: SortOrder
    employees?: SortOrder
    name_b?: SortOrder
    password_b?: SortOrder
    position?: SortOrder
    storage_needs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessuserMinOrderByAggregateInput = {
    id?: SortOrder
    agree_contact_sales?: SortOrder
    agree_tos_b?: SortOrder
    company_name?: SortOrder
    email_b?: SortOrder
    employees?: SortOrder
    name_b?: SortOrder
    password_b?: SortOrder
    position?: SortOrder
    storage_needs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PersonaluserDefaultArgs instead
     */
    export type PersonaluserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonaluserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessuserDefaultArgs instead
     */
    export type BusinessuserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessuserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}