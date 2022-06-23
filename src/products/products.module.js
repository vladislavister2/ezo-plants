"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsModule = void 0;
var common_1 = require("@nestjs/common");
var sequelize_1 = require("@nestjs/sequelize");
var products_service_1 = require("./products.service");
var products_controller_1 = require("./products.controller");
var products_model_1 = require("./products.model");
var category_model_1 = require("../category/category.model");
var category_products_model_1 = require("../category/category-products.model");
var category_module_1 = require("../category/category.module");
var cart_module_1 = require("../cart/cart.module");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                sequelize_1.SequelizeModule.forFeature([products_model_1.Product, category_model_1.Category, category_products_model_1.CategoryProducts]),
                category_module_1.CategoryModule,
                cart_module_1.CartModule,
            ],
            exports: [products_service_1.ProductsService],
            controllers: [products_controller_1.ProductsController],
            providers: [products_service_1.ProductsService]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
