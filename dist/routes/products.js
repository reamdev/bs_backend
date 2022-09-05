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
const controllers_1 = require("../controllers");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.query.category ? String(req.query.category) : '';
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const offset = (((Number(req.query.page) > 1) && req.query.page) ? Number(req.query.page) - 1 : 0) * 10;
    const response = yield (0, controllers_1.getAllProducts)(categoryId, limit, offset);
    res.send(response);
}));
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.query.value ? String(req.query.value) : '';
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const offset = (((Number(req.query.page) > 1) && req.query.page) ? Number(req.query.page) - 1 : 0) * 10;
    const response = yield (0, controllers_1.searchProduct)(search, limit, offset);
    res.send(response);
}));
exports.default = router;
