"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CategoryController = void 0;
var common_1 = require("@nestjs/common");
var CategoryController = /** @class */ (function () {
    function CategoryController(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryController.prototype.addProduct = function (dto) {
        return this.categoryService.addProductToCategory(dto);
    };
    CategoryController.prototype.deleteProductFromCategory = function (id) {
        return this.categoryService.deleteProductFromCategory(id);
    };
    CategoryController.prototype.show = function () {
        return this.categoryService.showAllCategoryProducts();
    };
    CategoryController.prototype.getAll = function () {
        return this.categoryService.getAll();
    };
    CategoryController.prototype.getOne = function (id) {
        return this.categoryService.getById(id);
    };
    CategoryController.prototype.create = function (dto) {
        return this.categoryService.create(dto);
    };
    CategoryController.prototype["delete"] = function (id) {
        return this.categoryService.remove(id);
    };
    CategoryController.prototype.update = function (dto, id) {
        return this.categoryService.update(id, dto);
    };
    __decorate([
        (0, common_1.Post)('/addProductToCategory'),
        __param(0, (0, common_1.Body)())
    ], CategoryController.prototype, "addProduct");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategoryController.prototype, "deleteProductFromCategory");
    __decorate([
        (0, common_1.Get)(':showAllCategoryProducts')
    ], CategoryController.prototype, "show");
    __decorate([
        (0, common_1.Get)()
    ], CategoryController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategoryController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)())
    ], CategoryController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategoryController.prototype, "delete");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)('id'))
    ], CategoryController.prototype, "update");
    CategoryController = __decorate([
        (0, common_1.Controller)('category')
    ], CategoryController);
    return CategoryController;
}());
exports.CategoryController = CategoryController;
