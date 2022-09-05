"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.initConnection = void 0;
const mysql_1 = require("mysql");
const config_1 = __importDefault(require("../config"));
let conector;
const initConnection = () => {
    try {
        conector = (0, mysql_1.createPool)({
            host: config_1.default.db.host,
            user: config_1.default.db.user,
            password: config_1.default.db.password,
            database: config_1.default.db.database
        });
        setInterval(() => {
            conector.query('SELECT 1', err => {
                if (err) {
                    console.log(err);
                    return;
                }
            });
        }, 4000);
    }
    catch (err) {
        console.error('MySQL Connector init error', err);
        throw new Error('Error al inicializar pool');
    }
};
exports.initConnection = initConnection;
const execute = (query, params) => {
    try {
        if (!conector)
            throw new Error('Pool is not initialized');
        return new Promise((resolve, reject) => {
            conector.query(query, params, (err, results) => {
                if (err)
                    return reject(err);
                resolve(results);
            });
        });
    }
    catch (err) {
        console.error('MySQL Connector execute error', err);
        throw new Error('Error al ejecutar MySQL query');
    }
};
exports.execute = execute;
