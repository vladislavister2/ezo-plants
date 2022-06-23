"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateOrderDto = void 0;
var class_validator_1 = require("class-validator");
var UpdateOrderDto = /** @class */ (function () {
    function UpdateOrderDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)()
    ], UpdateOrderDto.prototype, "id");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MinLength)(4)
    ], UpdateOrderDto.prototype, "cartId");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], UpdateOrderDto.prototype, "city");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], UpdateOrderDto.prototype, "telephone");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MinLength)(2)
    ], UpdateOrderDto.prototype, "firstName");
    __decorate([
        (0, class_validator_1.MinLength)(2),
        (0, class_validator_1.IsNotEmpty)()
    ], UpdateOrderDto.prototype, "lastName");
    return UpdateOrderDto;
}());
exports.UpdateOrderDto = UpdateOrderDto;
