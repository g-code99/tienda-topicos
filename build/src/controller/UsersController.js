"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const logger_1 = require("../utils/logger");
// ORM
const User_orm_1 = require("../domain/orm/User.orm");
let UserController = class UserController {
    /**
     * Endpoint to retreive the users in the Collection "users" of Database
     * @returns all users
     */
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)("[/api/v1/users] Get All Users Request");
            const response = yield (0, User_orm_1.getAllUsers)();
            return response;
        });
    }
    /**
     * Endpoint to retreive an user by ID from Collection "users" of Database
     * @param id Param ID user
     * @returns User or undefided value
     */
    getUserByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)(`[/api/v1/users] Get user by ID: ${id}`);
            const response = yield (0, User_orm_1.getUserByID)(id);
            return response;
        });
    }
    /**
     * Endpoint to update an user by ID from Collection 'users' of Mongo Server
     * @param {Object} user User Object
     * @returns User or undefided value
     */
    updateUserByID(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)(`[/api/v1/users] Update user with properties: ${user}`);
            const response = yield (0, User_orm_1.updateOneUser)(user, id);
            return response;
        });
    }
    /**
     * Endpoint to update an user by ID from Collection 'users' of Mongo Server
     * @param {Object} user User Object
     * @returns User or undefided value
     */
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)(`[/api/v1/users] create user with properties: ${user}`);
            const response = yield (0, User_orm_1.createOneUser)(user);
            return response;
        });
    }
    /**
     * Endpoint to get all payments by id user from Collection 'users' of Mongo Server
     * @param {Object} id ID user
     * @returns Payments array
     */
    getPayments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)(`[/api/v1/users/:id/payments] create user with properties: ${id}`);
            const response = yield (0, User_orm_1.getAllPayments)(id).then((p) => {
                if (!p) {
                    return [];
                }
                const payment = p[0].payment;
                return payment;
            });
            return response;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, tsoa_1.Get)("/:id"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByID", null);
__decorate([
    (0, tsoa_1.Put)("/:id"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserByID", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Get)("/:id/payments"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPayments", null);
UserController = __decorate([
    (0, tsoa_1.Route)("/api/v1/users"),
    (0, tsoa_1.Tags)("UserController")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UsersController.js.map