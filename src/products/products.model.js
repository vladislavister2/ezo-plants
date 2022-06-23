"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Product = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var category_model_1 = require("../category/category.model");
var category_products_model_1 = require("../category/category-products.model");
var cart_model_1 = require("../cart/cart.model");
var cart_products_model_1 = require("../cart/cart-products.model");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        })
    ], Product.prototype, "id");
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING,
            allowNull: false
        })
    ], Product.prototype, "title");
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.INTEGER,
            allowNull: false
        })
    ], Product.prototype, "price");
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.BOOLEAN,
            defaultValue: false
        })
    ], Product.prototype, "isAvailable");
    __decorate([
        (0, sequelize_typescript_1.BelongsToMany)(function () { return category_model_1.Category; }, function () { return category_products_model_1.CategoryProducts; })
    ], Product.prototype, "categories");
    __decorate([
        (0, sequelize_typescript_1.BelongsToMany)(function () { return cart_model_1.Cart; }, function () { return cart_products_model_1.CartProducts; })
    ], Product.prototype, "carts");
    Product = __decorate([
        (0, sequelize_typescript_1.Table)({ tableName: 'products' })
    ], Product);
    return Product;
}(sequelize_typescript_1.Model));
exports.Product = Product;
