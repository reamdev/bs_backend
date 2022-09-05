"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    app: {
        port: process.env.PORT || 80
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'dev',
        password: process.env.DB_PASSWORD || 'dev',
        database: process.env.DB_NAME || 'dev'
    }
};
