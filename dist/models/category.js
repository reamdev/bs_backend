"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Category = Category;
