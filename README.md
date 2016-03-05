## Parse Server with Azure Storage Files Adapter
A base to getting started with Parse Server with Azure Storage. If you are not using Cloud Code then you can just deploy this directly to a server and configure it.

**REQUIRES ES6**

### Configuration Properties
**Required**
`PARSE_SERVER_APPLICATION_ID`: Your Parse Application ID
`PARSE_SERVER_MASTER_KEY`: Your Parse Master Key. Keep it secret!
`DATABASE_SERVER`: Your databases server domain
`DATABASE_COLLECTION`: Your databases collection (database)
`STORAGE_ACCOUNT`: Your Azure Storage Account
`STORAGE_CONTAINER`: Your Azure Storage Container
`STORAGE_ACCESS_KEY`: Your Azure Storage Access Key

**Optional**
`PORT`: The port to run the ParseServer. _default: 1337_
`DATABASE_USER`: Unencoded database user
`DATABASE_PASSWORD`: Unencoded database password
`CLOUD_CODE_MAIN`: Cloud Code's main js file location. _e.g. cloud/main.js_
`PARSE_MOUNT`: Mount path for the parse API. _default: '/1'_
`ENABLE_ROOT_ROUTE`: Enables a root route (`/`) that will return a status of 200.
`PARSE_SERVER_FILE_KEY`: Key for your files.
`PARSE_SERVER_URL`: Url of the parse server. This is mainly used for cloud code.
`PARSE_SERVER_CLIENT_KEY`: Key for iOS, MacOS, tvOS clients
`PARSE_SERVER_JAVASCRIPT_KEY`: Key for the Javascript SDK
`PARSE_SERVER_REST_API_KEY`: Key for REST calls
`PARSE_SERVER_DOT_NET_KEY`: Key for Unity and .Net SDK
`PARSE_SERVER_PUSH`: Configuration for push, as stringified JSON. See [Push](https://github.com/ParsePlatform/parse-server/wiki/Push).
`PARSE_SERVER_OAUTH_PROVIDERS`: Configuration for your oAuth providers, as stringified JSON. See [oAuth](https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide#oauth).
`PARSE_SERVER_FACEBOOK_APP_IDS`: Comma separated list for your facebook app Ids.
`PARSE_SERVER_ENABLE_ANON_USERS`: Enable (or disable) anon users. _default: true_
`PARSE_SERVER_ALLOW_CLIENT_CLASS_CREATION`: Enable (or disable) client class creation. _default: true_
`PARSE_SERVER_MAX_UPLOAD_SIZE`: Max file size for uploads. _defautl: 20mb_
`STORAGE_DIRECT_ACCESS`: See [parse-server-azure-storage](https://github.com/felixrieseberg/parse-server-azure-storage/blob/master/README.md#direct-access "Direct Access"). _default: false_
