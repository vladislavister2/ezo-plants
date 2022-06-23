"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoArticlesService = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var crypto_1 = require("crypto");
var InfoArticlesService = /** @class */ (function () {
    function InfoArticlesService(httpService) {
        this.httpService = httpService;
    }
    InfoArticlesService.prototype.findPoetry = function () {
        return this.httpService
            .get("https://api-thirukkural.vercel.app/api?num=".concat((0, crypto_1.randomInt)(1, 1000)))
            .pipe((0, rxjs_1.map)(function (response) { return response.data; }));
    };
    InfoArticlesService = __decorate([
        (0, common_1.Injectable)()
    ], InfoArticlesService);
    return InfoArticlesService;
}());
exports.InfoArticlesService = InfoArticlesService;
