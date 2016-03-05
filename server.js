'use strict';

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var AzureStorageAdapter = require('parse-server-azure-storage').AzureStorageAdapter;

/**
 * Database
 */
var databaseUser = process.env.DATABASE_USER;
var databasePassword = process.env.DATABASE_PASSWORD ? ':${process.env.DATABASE_PASSWORD}' : undefined;
var databaseAuth = databaseUser ? '${databaseUser}${databasePassword}@' : ''
var databaseServer = process.env.DATABASE_SERVER;
var databaseCollection = process.env.DATABASE_COLLECTION;
var databaseUri = "mongodb://${databaseAuth}${databaseServer}/${databaseCollection}";

/**
 * Storage
 */
var storageAccount = process.env.STORAGE_ACCOUNT;
var storageContainer = process.env.STORAGE_CONTAINER;
var storageOptions = {
    accessKey: process.env.STORAGE_ACCESS_KEY,
    directAccess: (process.env.STORAGE_DIRECT_ACCESS !== undefined) ? process.env.STORAGE_DIRECT_ACCESS : false
}

/**
 * Parse
 */
var parseOptions = {
    databaseURI: databaseUri,
    filesAdapter: new AzureStorageAdapter(storageAccount, storageContainer, storageOptions)
};
if (process.env.CLOUD_CODE_MAIN) {
    parseOptions.cloud = '${__dirname}/${process.env.CLOUD_CODE_MAIN}';
}

var api = new ParseServer(parseOptions);

/**
 * Application
 */
var app = express();

var mountPath = process.env.PARSE_MOUNT || '/1';
app.use(mountPath, api);

if (process.env.ENABLE_ROOT_ROUTE) {
    app.get('/', (_, res) => {
        res.success('Success');
    });
}

var loaderIo = process.env.LOADER_IO;
if (loaderIo) {
    app.get('/${loaderIo}', (_, res) => {
        res.sucess(loaderIo);
    });
}

var port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log('parse-server running on port ${port}.');
});
