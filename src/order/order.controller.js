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
exports.OrderController = void 0;
var common_1 = require("@nestjs/common");
var OrderController = /** @class */ (function () {
    function OrderController(orderService) {
        this.orderService = orderService;
    }
    OrderController.prototype.getAll = function () {
        return this.orderService.getAll();
    };
    OrderController.prototype.getOne = function (id) {
        return this.orderService.getById(id);
    };
    OrderController.prototype.create = function (dto) {
        return this.orderService.create(dto);
    };
    OrderController.prototype["delete"] = function (id) {
        return this.orderService.remove(id);
    };
    OrderController.prototype.update = function (dto, id) {
        return this.orderService.update(id, dto);
    };
    __decorate([
        (0, common_1.Get)()
    ], OrderController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], OrderController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)())
    ], OrderController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], OrderController.prototype, "delete");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)('id'))
    ], OrderController.prototype, "update");
    OrderController = __decorate([
        (0, common_1.Controller)('order')
    ], OrderController);
    return OrderController;
}());
exports.OrderController = OrderController;
