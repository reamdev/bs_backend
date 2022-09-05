"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = exports.ProductRouter = void 0;
var products_1 = require("./products");
Object.defineProperty(exports, "ProductRouter", { enumerable: true, get: function () { return __importDefault(products_1).default; } });
var categories_1 = require("./categories");
Object.defineProperty(exports, "CategoryRouter", { enumerable: true, get: function () { return __importDefault(categories_1).default; } });
