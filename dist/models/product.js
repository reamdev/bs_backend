"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, url_image, price, discount, category) {
        this.id = id;
        this.name = name;
        this.url_image = url_image;
        this.price = price;
        this.discount = discount;
        this.category = category;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getURLImage() {
        return this.url_image;
    }
    getPrice() {
        return this.price;
    }
    getDiscount() {
        return this.discount;
    }
    getCategory() {
        return this.category;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setURLImage(urlImage) {
        this.url_image = urlImage;
    }
    setPrice(price) {
        this.price = price;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    setCategory(categoryId) {
        this.category = categoryId;
    }
}
exports.Product = Product;
