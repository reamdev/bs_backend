"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = exports.getAllProducts = void 0;
const db_1 = require("../db");
const getAllProducts = (categoryId = '', limit = 12, offset = 0) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = 'SELECT * FROM product';
    let params = [];
    if (categoryId !== '') {
        sql += ' WHERE category = ?';
        params = [...params, categoryId];
    }
    sql += ' LIMIT ? OFFSET ?';
    params = [...params, limit, offset];
    // const sql = categoryId !== '' ? 'SELECT * FROM product WHERE category = ? LIMIT ? OFFSET ?' : 'SELECT * FROM product LIMIT ? OFFSET ?'
    // const params = categoryId !== '' ? [categoryId, limit, offset] : [limit, offset]
    return yield (0, db_1.execute)(sql, params);
});
exports.getAllProducts = getAllProducts;
const searchProduct = (search = '', limit = 12, offset = 0) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT product.id, product.name, product.url_image, product.price, product.discount, category.name as category FROM product INNER JOIN category ON product.category = category.id WHERE LOWER(product.name) LIKE LOWER(?) OR LOWER(category.name) LIKE LOWER(?) LIMIT ? OFFSET ?';
    return yield (0, db_1.execute)(sql, [`%${search}%`, `%${search}%`, limit, offset]);
});
exports.searchProduct = searchProduct;
