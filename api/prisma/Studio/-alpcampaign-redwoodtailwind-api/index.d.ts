import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw }

/**
 * Prisma Client JS version: 2.6.1
 * Query Engine version: 6a8054bb549e4cc23f157b0010cb2e95cb2637fb
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export declare type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export declare type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  DS?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

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
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
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
  | 'findOne'
  | 'findMany'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'

/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: string
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
  next: (params: MiddlewareParams) => Promise<T>,
) => Promise<T>

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  constructor(optionsArg?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * @deprecated renamed to `$on`
   */
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  $connect(): Promise<void>;
  /**
   * @deprecated renamed to `$connect`
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;
  /**
   * @deprecated renamed to `$disconnect`
   */
  disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * @deprecated renamed to `$executeRaw`
   */
  executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;
 
  /**
   * @deprecated renamed to `$executeRaw`
   */
  queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): PostDelegate;

  /**
   * `prisma.mem`: Exposes CRUD operations for the **Mem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mems
    * const mems = await prisma.mem.findMany()
    * ```
    */
  get mem(): MemDelegate;

  /**
   * `prisma.org`: Exposes CRUD operations for the **Org** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orgs
    * const orgs = await prisma.org.findMany()
    * ```
    */
  get org(): OrgDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const PostDistinctFieldEnum: {
  id: 'id',
  title: 'title',
  body: 'body',
  createdAt: 'createdAt'
};

export declare type PostDistinctFieldEnum = (typeof PostDistinctFieldEnum)[keyof typeof PostDistinctFieldEnum]


export declare const MemDistinctFieldEnum: {
  id: 'id',
  email: 'email',
  phone: 'phone',
  name: 'name',
  street_address: 'street_address',
  suburb: 'suburb',
  state: 'state',
  postcode: 'postcode'
};

export declare type MemDistinctFieldEnum = (typeof MemDistinctFieldEnum)[keyof typeof MemDistinctFieldEnum]


export declare const OrgDistinctFieldEnum: {
  id: 'id',
  email: 'email',
  phone: 'phone',
  name: 'name',
  street_address: 'street_address',
  suburb: 'suburb',
  state: 'state',
  postcode: 'postcode'
};

export declare type OrgDistinctFieldEnum = (typeof OrgDistinctFieldEnum)[keyof typeof OrgDistinctFieldEnum]


export declare const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export declare type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]



/**
 * Model Post
 */

export type Post = {
  id: number
  title: string
  body: string
  createdAt: Date
}


export type AggregatePost = {
  count: number
  avg: PostAvgAggregateOutputType | null
  sum: PostSumAggregateOutputType | null
  min: PostMinAggregateOutputType | null
  max: PostMaxAggregateOutputType | null
}

export type PostAvgAggregateOutputType = {
  id: number
}

export type PostSumAggregateOutputType = {
  id: number
}

export type PostMinAggregateOutputType = {
  id: number
}

export type PostMaxAggregateOutputType = {
  id: number
}


export type PostAvgAggregateInputType = {
  id?: true
}

export type PostSumAggregateInputType = {
  id?: true
}

export type PostMinAggregateInputType = {
  id?: true
}

export type PostMaxAggregateInputType = {
  id?: true
}

export type AggregatePostArgs = {
  where?: PostWhereInput
  orderBy?: Enumerable<PostOrderByInput>
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<PostDistinctFieldEnum>
  count?: true
  avg?: PostAvgAggregateInputType
  sum?: PostSumAggregateInputType
  min?: PostMinAggregateInputType
  max?: PostMaxAggregateInputType
}

export type GetPostAggregateType<T extends AggregatePostArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetPostAggregateScalarType<T[P]>
}

export type GetPostAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof PostAvgAggregateOutputType ? PostAvgAggregateOutputType[P] : never
}
    
    

export type PostSelect = {
  id?: boolean
  title?: boolean
  body?: boolean
  createdAt?: boolean
}

export type PostGetPayload<
  S extends boolean | null | undefined | PostArgs,
  U = keyof S
> = S extends true
  ? Post
  : S extends undefined
  ? never
  : S extends PostArgs | FindManyPostArgs
  ? 'include' extends U
    ? Post 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Post ? Post[P]
: 
 never
    }
  : Post
: Post


export interface PostDelegate {
  /**
   * Find zero or one Post.
   * @param {FindOnePostArgs} args - Arguments to find a Post
   * @example
   * // Get one Post
   * const post = await prisma.post.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOnePostArgs>(
    args: Subset<T, FindOnePostArgs>
  ): CheckSelect<T, Prisma__PostClient<Post | null>, Prisma__PostClient<PostGetPayload<T> | null>>
  /**
   * Find zero or more Posts.
   * @param {FindManyPostArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Posts
   * const posts = await prisma.post.findMany()
   * 
   * // Get first 10 Posts
   * const posts = await prisma.post.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyPostArgs>(
    args?: Subset<T, FindManyPostArgs>
  ): CheckSelect<T, Promise<Array<Post>>, Promise<Array<PostGetPayload<T>>>>
  /**
   * Create a Post.
   * @param {PostCreateArgs} args - Arguments to create a Post.
   * @example
   * // Create one Post
   * const Post = await prisma.post.create({
   *   data: {
   *     // ... data to create a Post
   *   }
   * })
   * 
  **/
  create<T extends PostCreateArgs>(
    args: Subset<T, PostCreateArgs>
  ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
  /**
   * Delete a Post.
   * @param {PostDeleteArgs} args - Arguments to delete one Post.
   * @example
   * // Delete one Post
   * const Post = await prisma.post.delete({
   *   where: {
   *     // ... filter to delete one Post
   *   }
   * })
   * 
  **/
  delete<T extends PostDeleteArgs>(
    args: Subset<T, PostDeleteArgs>
  ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
  /**
   * Update one Post.
   * @param {PostUpdateArgs} args - Arguments to update one Post.
   * @example
   * // Update one Post
   * const post = await prisma.post.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends PostUpdateArgs>(
    args: Subset<T, PostUpdateArgs>
  ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
  /**
   * Delete zero or more Posts.
   * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
   * @example
   * // Delete a few Posts
   * const { count } = await prisma.post.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends PostDeleteManyArgs>(
    args: Subset<T, PostDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Posts.
   * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Posts
   * const post = await prisma.post.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends PostUpdateManyArgs>(
    args: Subset<T, PostUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Post.
   * @param {PostUpsertArgs} args - Arguments to update or create a Post.
   * @example
   * // Update or create a Post
   * const post = await prisma.post.upsert({
   *   create: {
   *     // ... data to create a Post
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Post we want to update
   *   }
   * })
  **/
  upsert<T extends PostUpsertArgs>(
    args: Subset<T, PostUpsertArgs>
  ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyPostArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregatePostArgs>(args: Subset<T, AggregatePostArgs>): Promise<GetPostAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Post.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__PostClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Post findOne
 */
export type FindOnePostArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Filter, which Post to fetch.
  **/
  where: PostWhereUniqueInput
}


/**
 * Post findMany
 */
export type FindManyPostArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Filter, which Posts to fetch.
  **/
  where?: PostWhereInput
  /**
   * Determine the order of the Posts to fetch.
  **/
  orderBy?: Enumerable<PostOrderByInput>
  /**
   * Sets the position for listing Posts.
  **/
  cursor?: PostWhereUniqueInput
  /**
   * The number of Posts to fetch. If negative number, it will take Posts before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Posts.
  **/
  skip?: number
  distinct?: Enumerable<PostDistinctFieldEnum>
}


/**
 * Post create
 */
export type PostCreateArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * The data needed to create a Post.
  **/
  data: PostCreateInput
}


/**
 * Post update
 */
export type PostUpdateArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * The data needed to update a Post.
  **/
  data: PostUpdateInput
  /**
   * Choose, which Post to update.
  **/
  where: PostWhereUniqueInput
}


/**
 * Post updateMany
 */
export type PostUpdateManyArgs = {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
}


/**
 * Post upsert
 */
export type PostUpsertArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * The filter to search for the Post to update in case it exists.
  **/
  where: PostWhereUniqueInput
  /**
   * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
  **/
  create: PostCreateInput
  /**
   * In case the Post was found with the provided `where` argument, update it with this data.
  **/
  update: PostUpdateInput
}


/**
 * Post delete
 */
export type PostDeleteArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
  /**
   * Filter which Post to delete.
  **/
  where: PostWhereUniqueInput
}


/**
 * Post deleteMany
 */
export type PostDeleteManyArgs = {
  where?: PostWhereInput
}


/**
 * Post without action
 */
export type PostArgs = {
  /**
   * Select specific fields to fetch from the Post
  **/
  select?: PostSelect | null
}



/**
 * Model Mem
 */

export type Mem = {
  id: number
  email: string
  phone: number | null
  name: string
  street_address: string
  suburb: string
  state: string
  postcode: number
}


export type AggregateMem = {
  count: number
  avg: MemAvgAggregateOutputType | null
  sum: MemSumAggregateOutputType | null
  min: MemMinAggregateOutputType | null
  max: MemMaxAggregateOutputType | null
}

export type MemAvgAggregateOutputType = {
  id: number
  phone: number
  postcode: number
}

export type MemSumAggregateOutputType = {
  id: number
  phone: number | null
  postcode: number
}

export type MemMinAggregateOutputType = {
  id: number
  phone: number | null
  postcode: number
}

export type MemMaxAggregateOutputType = {
  id: number
  phone: number | null
  postcode: number
}


export type MemAvgAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type MemSumAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type MemMinAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type MemMaxAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type AggregateMemArgs = {
  where?: MemWhereInput
  orderBy?: Enumerable<MemOrderByInput>
  cursor?: MemWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<MemDistinctFieldEnum>
  count?: true
  avg?: MemAvgAggregateInputType
  sum?: MemSumAggregateInputType
  min?: MemMinAggregateInputType
  max?: MemMaxAggregateInputType
}

export type GetMemAggregateType<T extends AggregateMemArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetMemAggregateScalarType<T[P]>
}

export type GetMemAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof MemAvgAggregateOutputType ? MemAvgAggregateOutputType[P] : never
}
    
    

export type MemSelect = {
  id?: boolean
  email?: boolean
  phone?: boolean
  name?: boolean
  street_address?: boolean
  suburb?: boolean
  state?: boolean
  postcode?: boolean
}

export type MemGetPayload<
  S extends boolean | null | undefined | MemArgs,
  U = keyof S
> = S extends true
  ? Mem
  : S extends undefined
  ? never
  : S extends MemArgs | FindManyMemArgs
  ? 'include' extends U
    ? Mem 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Mem ? Mem[P]
: 
 never
    }
  : Mem
: Mem


export interface MemDelegate {
  /**
   * Find zero or one Mem.
   * @param {FindOneMemArgs} args - Arguments to find a Mem
   * @example
   * // Get one Mem
   * const mem = await prisma.mem.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneMemArgs>(
    args: Subset<T, FindOneMemArgs>
  ): CheckSelect<T, Prisma__MemClient<Mem | null>, Prisma__MemClient<MemGetPayload<T> | null>>
  /**
   * Find zero or more Mems.
   * @param {FindManyMemArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Mems
   * const mems = await prisma.mem.findMany()
   * 
   * // Get first 10 Mems
   * const mems = await prisma.mem.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const memWithIdOnly = await prisma.mem.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyMemArgs>(
    args?: Subset<T, FindManyMemArgs>
  ): CheckSelect<T, Promise<Array<Mem>>, Promise<Array<MemGetPayload<T>>>>
  /**
   * Create a Mem.
   * @param {MemCreateArgs} args - Arguments to create a Mem.
   * @example
   * // Create one Mem
   * const Mem = await prisma.mem.create({
   *   data: {
   *     // ... data to create a Mem
   *   }
   * })
   * 
  **/
  create<T extends MemCreateArgs>(
    args: Subset<T, MemCreateArgs>
  ): CheckSelect<T, Prisma__MemClient<Mem>, Prisma__MemClient<MemGetPayload<T>>>
  /**
   * Delete a Mem.
   * @param {MemDeleteArgs} args - Arguments to delete one Mem.
   * @example
   * // Delete one Mem
   * const Mem = await prisma.mem.delete({
   *   where: {
   *     // ... filter to delete one Mem
   *   }
   * })
   * 
  **/
  delete<T extends MemDeleteArgs>(
    args: Subset<T, MemDeleteArgs>
  ): CheckSelect<T, Prisma__MemClient<Mem>, Prisma__MemClient<MemGetPayload<T>>>
  /**
   * Update one Mem.
   * @param {MemUpdateArgs} args - Arguments to update one Mem.
   * @example
   * // Update one Mem
   * const mem = await prisma.mem.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends MemUpdateArgs>(
    args: Subset<T, MemUpdateArgs>
  ): CheckSelect<T, Prisma__MemClient<Mem>, Prisma__MemClient<MemGetPayload<T>>>
  /**
   * Delete zero or more Mems.
   * @param {MemDeleteManyArgs} args - Arguments to filter Mems to delete.
   * @example
   * // Delete a few Mems
   * const { count } = await prisma.mem.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends MemDeleteManyArgs>(
    args: Subset<T, MemDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Mems.
   * @param {MemUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Mems
   * const mem = await prisma.mem.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends MemUpdateManyArgs>(
    args: Subset<T, MemUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Mem.
   * @param {MemUpsertArgs} args - Arguments to update or create a Mem.
   * @example
   * // Update or create a Mem
   * const mem = await prisma.mem.upsert({
   *   create: {
   *     // ... data to create a Mem
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Mem we want to update
   *   }
   * })
  **/
  upsert<T extends MemUpsertArgs>(
    args: Subset<T, MemUpsertArgs>
  ): CheckSelect<T, Prisma__MemClient<Mem>, Prisma__MemClient<MemGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyMemArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateMemArgs>(args: Subset<T, AggregateMemArgs>): Promise<GetMemAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Mem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__MemClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Mem findOne
 */
export type FindOneMemArgs = {
  /**
   * Select specific fields to fetch from the Mem
  **/
  select?: MemSelect | null
  /**
   * Filter, which Mem to fetch.
  **/
  where: MemWhereUniqueInput
}


/**
 * Mem findMany
 */
export type FindManyMemArgs = {
  /**
   * Select specific fields to fetch from the Mem
  **/
  select?: MemSelect | null
  /**
   * Filter, which Mems to fetch.
  **/
  where?: MemWhereInput
  /**
   * Determine the order of the Mems to fetch.
  **/
  orderBy?: Enumerable<MemOrderByInput>
  /**
   * Sets the position for listing Mems.
  **/
  cursor?: MemWhereUniqueInput
  /**
   * The number of Mems to fetch. If negative number, it will take Mems before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Mems.
  **/
  skip?: number
  distinct?: Enumerable<MemDistinctFieldEnum>
}


/**
 * Mem create
 */
export type MemCreateArgs = {
  /**
   * Select specific fields to fetch from the Mem
  **/
  select?: MemSelect | null
  /**
   * The data needed to create a Mem.
  **/
  data: MemCreateInput
}


/**
 * Mem update
 */
export type MemUpdateArgs = {
  /**
   * Select specific fields to fetch from the Mem
  **/
  select?: MemSelect | null
  /**
   * The data needed to update a Mem.
  **/
  data: MemUpdateInput
  /**
   * Choose, which Mem to update.
  **/
  where: MemWhereUniqueInput
}


/**
 * Mem updateMany
 */
export type MemUpdateManyArgs = {
  data: MemUpdateManyMutationInput
  where?: MemWhereInput
}


/**
 * Mem upsert
 */
export type MemUpsertArgs = {
  /**
   * Select specific fields to fetch from the Mem
  **/
  select?: MemSelect | null
  /**
   * The filter to search for the Mem to update in case it exists.
  **/
  where: MemWhereUniqueInput
  /**
   * In case the Mem found by the `where` argument doesn't exist, create a new Mem with this data.
  **/
  create: MemCreateInput
  /**
   * In case the Mem was found with the provided `where` argument, update it with this data.
  **/
  update: MemUpdateInput
}


/**
 * Mem delete
 */
export type MemDeleteArgs = {
  /**
   * Select specific fields to fetch from the Mem
  **/
  select?: MemSelect | null
  /**
   * Filter which Mem to delete.
  **/
  where: MemWhereUniqueInput
}


/**
 * Mem deleteMany
 */
export type MemDeleteManyArgs = {
  where?: MemWhereInput
}


/**
 * Mem without action
 */
export type MemArgs = {
  /**
   * Select specific fields to fetch from the Mem
  **/
  select?: MemSelect | null
}



/**
 * Model Org
 */

export type Org = {
  id: number
  email: string
  phone: number | null
  name: string
  street_address: string
  suburb: string
  state: string
  postcode: number
}


export type AggregateOrg = {
  count: number
  avg: OrgAvgAggregateOutputType | null
  sum: OrgSumAggregateOutputType | null
  min: OrgMinAggregateOutputType | null
  max: OrgMaxAggregateOutputType | null
}

export type OrgAvgAggregateOutputType = {
  id: number
  phone: number
  postcode: number
}

export type OrgSumAggregateOutputType = {
  id: number
  phone: number | null
  postcode: number
}

export type OrgMinAggregateOutputType = {
  id: number
  phone: number | null
  postcode: number
}

export type OrgMaxAggregateOutputType = {
  id: number
  phone: number | null
  postcode: number
}


export type OrgAvgAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type OrgSumAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type OrgMinAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type OrgMaxAggregateInputType = {
  id?: true
  phone?: true
  postcode?: true
}

export type AggregateOrgArgs = {
  where?: OrgWhereInput
  orderBy?: Enumerable<OrgOrderByInput>
  cursor?: OrgWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<OrgDistinctFieldEnum>
  count?: true
  avg?: OrgAvgAggregateInputType
  sum?: OrgSumAggregateInputType
  min?: OrgMinAggregateInputType
  max?: OrgMaxAggregateInputType
}

export type GetOrgAggregateType<T extends AggregateOrgArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetOrgAggregateScalarType<T[P]>
}

export type GetOrgAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof OrgAvgAggregateOutputType ? OrgAvgAggregateOutputType[P] : never
}
    
    

export type OrgSelect = {
  id?: boolean
  email?: boolean
  phone?: boolean
  name?: boolean
  street_address?: boolean
  suburb?: boolean
  state?: boolean
  postcode?: boolean
}

export type OrgGetPayload<
  S extends boolean | null | undefined | OrgArgs,
  U = keyof S
> = S extends true
  ? Org
  : S extends undefined
  ? never
  : S extends OrgArgs | FindManyOrgArgs
  ? 'include' extends U
    ? Org 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Org ? Org[P]
: 
 never
    }
  : Org
: Org


export interface OrgDelegate {
  /**
   * Find zero or one Org.
   * @param {FindOneOrgArgs} args - Arguments to find a Org
   * @example
   * // Get one Org
   * const org = await prisma.org.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneOrgArgs>(
    args: Subset<T, FindOneOrgArgs>
  ): CheckSelect<T, Prisma__OrgClient<Org | null>, Prisma__OrgClient<OrgGetPayload<T> | null>>
  /**
   * Find zero or more Orgs.
   * @param {FindManyOrgArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Orgs
   * const orgs = await prisma.org.findMany()
   * 
   * // Get first 10 Orgs
   * const orgs = await prisma.org.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const orgWithIdOnly = await prisma.org.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyOrgArgs>(
    args?: Subset<T, FindManyOrgArgs>
  ): CheckSelect<T, Promise<Array<Org>>, Promise<Array<OrgGetPayload<T>>>>
  /**
   * Create a Org.
   * @param {OrgCreateArgs} args - Arguments to create a Org.
   * @example
   * // Create one Org
   * const Org = await prisma.org.create({
   *   data: {
   *     // ... data to create a Org
   *   }
   * })
   * 
  **/
  create<T extends OrgCreateArgs>(
    args: Subset<T, OrgCreateArgs>
  ): CheckSelect<T, Prisma__OrgClient<Org>, Prisma__OrgClient<OrgGetPayload<T>>>
  /**
   * Delete a Org.
   * @param {OrgDeleteArgs} args - Arguments to delete one Org.
   * @example
   * // Delete one Org
   * const Org = await prisma.org.delete({
   *   where: {
   *     // ... filter to delete one Org
   *   }
   * })
   * 
  **/
  delete<T extends OrgDeleteArgs>(
    args: Subset<T, OrgDeleteArgs>
  ): CheckSelect<T, Prisma__OrgClient<Org>, Prisma__OrgClient<OrgGetPayload<T>>>
  /**
   * Update one Org.
   * @param {OrgUpdateArgs} args - Arguments to update one Org.
   * @example
   * // Update one Org
   * const org = await prisma.org.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends OrgUpdateArgs>(
    args: Subset<T, OrgUpdateArgs>
  ): CheckSelect<T, Prisma__OrgClient<Org>, Prisma__OrgClient<OrgGetPayload<T>>>
  /**
   * Delete zero or more Orgs.
   * @param {OrgDeleteManyArgs} args - Arguments to filter Orgs to delete.
   * @example
   * // Delete a few Orgs
   * const { count } = await prisma.org.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends OrgDeleteManyArgs>(
    args: Subset<T, OrgDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Orgs.
   * @param {OrgUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Orgs
   * const org = await prisma.org.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends OrgUpdateManyArgs>(
    args: Subset<T, OrgUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Org.
   * @param {OrgUpsertArgs} args - Arguments to update or create a Org.
   * @example
   * // Update or create a Org
   * const org = await prisma.org.upsert({
   *   create: {
   *     // ... data to create a Org
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Org we want to update
   *   }
   * })
  **/
  upsert<T extends OrgUpsertArgs>(
    args: Subset<T, OrgUpsertArgs>
  ): CheckSelect<T, Prisma__OrgClient<Org>, Prisma__OrgClient<OrgGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyOrgArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateOrgArgs>(args: Subset<T, AggregateOrgArgs>): Promise<GetOrgAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Org.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__OrgClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Org findOne
 */
export type FindOneOrgArgs = {
  /**
   * Select specific fields to fetch from the Org
  **/
  select?: OrgSelect | null
  /**
   * Filter, which Org to fetch.
  **/
  where: OrgWhereUniqueInput
}


/**
 * Org findMany
 */
export type FindManyOrgArgs = {
  /**
   * Select specific fields to fetch from the Org
  **/
  select?: OrgSelect | null
  /**
   * Filter, which Orgs to fetch.
  **/
  where?: OrgWhereInput
  /**
   * Determine the order of the Orgs to fetch.
  **/
  orderBy?: Enumerable<OrgOrderByInput>
  /**
   * Sets the position for listing Orgs.
  **/
  cursor?: OrgWhereUniqueInput
  /**
   * The number of Orgs to fetch. If negative number, it will take Orgs before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Orgs.
  **/
  skip?: number
  distinct?: Enumerable<OrgDistinctFieldEnum>
}


/**
 * Org create
 */
export type OrgCreateArgs = {
  /**
   * Select specific fields to fetch from the Org
  **/
  select?: OrgSelect | null
  /**
   * The data needed to create a Org.
  **/
  data: OrgCreateInput
}


/**
 * Org update
 */
export type OrgUpdateArgs = {
  /**
   * Select specific fields to fetch from the Org
  **/
  select?: OrgSelect | null
  /**
   * The data needed to update a Org.
  **/
  data: OrgUpdateInput
  /**
   * Choose, which Org to update.
  **/
  where: OrgWhereUniqueInput
}


/**
 * Org updateMany
 */
export type OrgUpdateManyArgs = {
  data: OrgUpdateManyMutationInput
  where?: OrgWhereInput
}


/**
 * Org upsert
 */
export type OrgUpsertArgs = {
  /**
   * Select specific fields to fetch from the Org
  **/
  select?: OrgSelect | null
  /**
   * The filter to search for the Org to update in case it exists.
  **/
  where: OrgWhereUniqueInput
  /**
   * In case the Org found by the `where` argument doesn't exist, create a new Org with this data.
  **/
  create: OrgCreateInput
  /**
   * In case the Org was found with the provided `where` argument, update it with this data.
  **/
  update: OrgUpdateInput
}


/**
 * Org delete
 */
export type OrgDeleteArgs = {
  /**
   * Select specific fields to fetch from the Org
  **/
  select?: OrgSelect | null
  /**
   * Filter which Org to delete.
  **/
  where: OrgWhereUniqueInput
}


/**
 * Org deleteMany
 */
export type OrgDeleteManyArgs = {
  where?: OrgWhereInput
}


/**
 * Org without action
 */
export type OrgArgs = {
  /**
   * Select specific fields to fetch from the Org
  **/
  select?: OrgSelect | null
}



/**
 * Deep Input Types
 */


export type PostWhereInput = {
  AND?: Enumerable<PostWhereInput>
  OR?: Array<PostWhereInput>
  NOT?: Enumerable<PostWhereInput>
  id?: number | IntFilter
  title?: string | StringFilter
  body?: string | StringFilter
  createdAt?: Date | string | DateTimeFilter
}

export type PostOrderByInput = {
  id?: SortOrder
  title?: SortOrder
  body?: SortOrder
  createdAt?: SortOrder
}

export type PostWhereUniqueInput = {
  id?: number
}

export type MemWhereInput = {
  AND?: Enumerable<MemWhereInput>
  OR?: Array<MemWhereInput>
  NOT?: Enumerable<MemWhereInput>
  id?: number | IntFilter
  email?: string | StringFilter
  phone?: number | IntNullableFilter | null
  name?: string | StringFilter
  street_address?: string | StringFilter
  suburb?: string | StringFilter
  state?: string | StringFilter
  postcode?: number | IntFilter
}

export type MemOrderByInput = {
  id?: SortOrder
  email?: SortOrder
  phone?: SortOrder
  name?: SortOrder
  street_address?: SortOrder
  suburb?: SortOrder
  state?: SortOrder
  postcode?: SortOrder
}

export type MemWhereUniqueInput = {
  id?: number
  email?: string
}

export type OrgWhereInput = {
  AND?: Enumerable<OrgWhereInput>
  OR?: Array<OrgWhereInput>
  NOT?: Enumerable<OrgWhereInput>
  id?: number | IntFilter
  email?: string | StringFilter
  phone?: number | IntNullableFilter | null
  name?: string | StringFilter
  street_address?: string | StringFilter
  suburb?: string | StringFilter
  state?: string | StringFilter
  postcode?: number | IntFilter
}

export type OrgOrderByInput = {
  id?: SortOrder
  email?: SortOrder
  phone?: SortOrder
  name?: SortOrder
  street_address?: SortOrder
  suburb?: SortOrder
  state?: SortOrder
  postcode?: SortOrder
}

export type OrgWhereUniqueInput = {
  id?: number
  email?: string
}

export type PostCreateInput = {
  title: string
  body: string
  createdAt?: Date | string
}

export type PostUpdateInput = {
  title?: string | StringFieldUpdateOperationsInput
  body?: string | StringFieldUpdateOperationsInput
  createdAt?: Date | string | DateTimeFieldUpdateOperationsInput
}

export type PostUpdateManyMutationInput = {
  title?: string | StringFieldUpdateOperationsInput
  body?: string | StringFieldUpdateOperationsInput
  createdAt?: Date | string | DateTimeFieldUpdateOperationsInput
}

export type MemCreateInput = {
  email: string
  phone?: number | null
  name: string
  street_address: string
  suburb: string
  state: string
  postcode: number
}

export type MemUpdateInput = {
  email?: string | StringFieldUpdateOperationsInput
  phone?: number | NullableIntFieldUpdateOperationsInput | null
  name?: string | StringFieldUpdateOperationsInput
  street_address?: string | StringFieldUpdateOperationsInput
  suburb?: string | StringFieldUpdateOperationsInput
  state?: string | StringFieldUpdateOperationsInput
  postcode?: number | IntFieldUpdateOperationsInput
}

export type MemUpdateManyMutationInput = {
  email?: string | StringFieldUpdateOperationsInput
  phone?: number | NullableIntFieldUpdateOperationsInput | null
  name?: string | StringFieldUpdateOperationsInput
  street_address?: string | StringFieldUpdateOperationsInput
  suburb?: string | StringFieldUpdateOperationsInput
  state?: string | StringFieldUpdateOperationsInput
  postcode?: number | IntFieldUpdateOperationsInput
}

export type OrgCreateInput = {
  email: string
  phone?: number | null
  name: string
  street_address: string
  suburb: string
  state: string
  postcode: number
}

export type OrgUpdateInput = {
  email?: string | StringFieldUpdateOperationsInput
  phone?: number | NullableIntFieldUpdateOperationsInput | null
  name?: string | StringFieldUpdateOperationsInput
  street_address?: string | StringFieldUpdateOperationsInput
  suburb?: string | StringFieldUpdateOperationsInput
  state?: string | StringFieldUpdateOperationsInput
  postcode?: number | IntFieldUpdateOperationsInput
}

export type OrgUpdateManyMutationInput = {
  email?: string | StringFieldUpdateOperationsInput
  phone?: number | NullableIntFieldUpdateOperationsInput | null
  name?: string | StringFieldUpdateOperationsInput
  street_address?: string | StringFieldUpdateOperationsInput
  suburb?: string | StringFieldUpdateOperationsInput
  state?: string | StringFieldUpdateOperationsInput
  postcode?: number | IntFieldUpdateOperationsInput
}

export type IntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type StringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type DateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date | string>
  notIn?: Enumerable<Date | string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: Date | string | NestedDateTimeFilter
}

export type IntNullableFilter = {
  equals?: number | null
  in?: Enumerable<number> | null
  notIn?: Enumerable<number> | null
  lt?: number | null
  lte?: number | null
  gt?: number | null
  gte?: number | null
  not?: number | NestedIntNullableFilter | null
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}

export type NullableIntFieldUpdateOperationsInput = {
  set?: number | null
}

export type IntFieldUpdateOperationsInput = {
  set?: number
}

export type NestedIntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter | null
}

export type NestedStringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter | null
}

export type NestedDateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date | string>
  notIn?: Enumerable<Date | string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: NestedDateTimeFilter | null
}

export type NestedIntNullableFilter = {
  equals?: number | null
  in?: Enumerable<number> | null
  notIn?: Enumerable<number> | null
  lt?: number | null
  lte?: number | null
  gt?: number | null
  gte?: number | null
  not?: NestedIntNullableFilter | null
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
