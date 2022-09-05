"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
(0, db_1.initConnection)();
const app = (0, express_1.default)();
// middleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get('/', (_, res) => {
    res.send('Welcome to BS_Backend');
});
app.use('/api/v1/products', routes_1.ProductRouter);
app.use('/api/v1/categories', routes_1.CategoryRouter);
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
