"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoArticlesModule = void 0;
var common_1 = require("@nestjs/common");
var info_articles_controller_1 = require("./info-articles.controller");
var info_articles_service_1 = require("./info-articles.service");
var axios_1 = require("@nestjs/axios");
var InfoArticlesModule = /** @class */ (function () {
    function InfoArticlesModule() {
    }
    InfoArticlesModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule.register({
                    timeout: 5000,
                    maxRedirects: 5
                }),
            ],
            providers: [info_articles_service_1.InfoArticlesService],
            controllers: [info_articles_controller_1.InfoArticlesController]
        })
    ], InfoArticlesModule);
    return InfoArticlesModule;
}());
exports.InfoArticlesModule = InfoArticlesModule;
