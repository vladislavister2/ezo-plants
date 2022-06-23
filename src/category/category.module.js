"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryModule = void 0;
var common_1 = require("@nestjs/common");
var sequelize_1 = require("@nestjs/sequelize");
var products_model_1 = require("../products/products.model");
var category_model_1 = require("./category.model");
var category_service_1 = require("./category.service");
var category_controller_1 = require("./category.controller");
var category_products_model_1 = require("./category-products.model");
var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        (0, common_1.Module)({
            imports: [sequelize_1.SequelizeModule.forFeature([products_model_1.Product, category_model_1.Category, category_products_model_1.CategoryProducts])],
            exports: [category_service_1.CategoryService],
            controllers: [category_controller_1.CategoryController],
            providers: [category_service_1.CategoryService]
        })
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;
