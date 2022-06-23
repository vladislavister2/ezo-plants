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
exports.ProductsController = void 0;
var common_1 = require("@nestjs/common");
var ProductsController = /** @class */ (function () {
    function ProductsController(productsService) {
        this.productsService = productsService;
    }
    ProductsController.prototype.getAll = function () {
        return this.productsService.getAll();
    };
    ProductsController.prototype.getOne = function (id) {
        return this.productsService.getById(id);
    };
    ProductsController.prototype.create = function (createProductDto) {
        return this.productsService.create(createProductDto);
    };
    ProductsController.prototype["delete"] = function (id) {
        return this.productsService.remove(id);
    };
    ProductsController.prototype.update = function (id, dto) {
        return this.productsService.update(id, dto);
    };
    __decorate([
        (0, common_1.Get)()
    ], ProductsController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductsController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)())
    ], ProductsController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductsController.prototype, "delete");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ProductsController.prototype, "update");
    ProductsController = __decorate([
        (0, common_1.Controller)('products')
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
