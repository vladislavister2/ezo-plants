"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var axios_1 = require("@nestjs/axios");
var sequelize_1 = require("@nestjs/sequelize");
var config_1 = require("@nestjs/config");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var products_module_1 = require("./products/products.module");
var users_module_1 = require("./users/users.module");
var info_articles_module_1 = require("./info-articles/info-articles.module");
var users_model_1 = require("./users/users.model");
var products_model_1 = require("./products/products.model");
var roles_module_1 = require("./roles/roles.module");
var roles_model_1 = require("./roles/roles.model");
var user_roles_model_1 = require("./roles/user-roles.model");
var auth_module_1 = require("./auth/auth.module");
var category_model_1 = require("./category/category.model");
var category_module_1 = require("./category/category.module");
var category_products_model_1 = require("./category/category-products.model");
var cart_module_1 = require("./cart/cart.module");
var cart_products_model_1 = require("./cart/cart-products.model");
var cart_model_1 = require("./cart/cart.model");
var order_module_1 = require("./order/order.module");
var order_model_1 = require("./order/order.model");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                products_module_1.ProductsModule,
                users_module_1.UsersModule,
                axios_1.HttpModule,
                info_articles_module_1.InfoArticlesModule,
                config_1.ConfigModule.forRoot({
                    envFilePath: ".".concat(process.env.NODE_ENV, ".env")
                }),
                sequelize_1.SequelizeModule.forRoot({
                    dialect: 'postgres',
                    host: process.env.POSTGRES_HOST,
                    port: Number(process.env.POSTGRES_PORT),
                    username: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                    models: [
                        users_model_1.User,
                        products_model_1.Product,
                        roles_model_1.Role,
                        user_roles_model_1.UserRoles,
                        category_model_1.Category,
                        category_products_model_1.CategoryProducts,
                        cart_products_model_1.CartProducts,
                        cart_model_1.Cart,
                        order_model_1.Order,
                    ],
                    autoLoadModels: true
                }),
                roles_module_1.RolesModule,
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                category_module_1.CategoryModule,
                cart_module_1.CartModule,
                order_module_1.OrderModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
