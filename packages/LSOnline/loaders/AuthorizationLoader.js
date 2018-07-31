"use strict";

module.exports = async () => {
    console.log('\x1b[36m%s\x1b[0m', '[Server] Loading authorization files...');

    try {
        const AuthorizationService = require("../modules/auth/AuthorizationService");
        const AuthorizePlayerCommandClientProvider = require("../modules/auth/clientProviders/AuthorizePlayerCommandClientProvider");
        const AuthorizePlayerCommand = require("../modules/auth/commands/AuthorizePlayerCommand");
    }
    catch (err) {
        return console.log('\x1b[31m%s\x1b[0m', '[Server] Error while loading modules: ' + err.message + "\n" + err.stack);
    }
};