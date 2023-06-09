"use strict";
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
exports.getAllDiscounts = void 0;
const Discount_entity_1 = require("../entities/Discount.entity");
const logger_1 = require("../../utils/logger");
// CRUD REQUEST
/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
const getAllDiscounts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let discountModel = (0, Discount_entity_1.discountEntity)();
        // Search all users
        const discounts = yield discountModel.find({});
        (0, logger_1.LogSuccess)('[ORM SUCCESS]: Getting all discounts');
        return discounts;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR]: Getting all discounts`);
        return undefined;
    }
});
exports.getAllDiscounts = getAllDiscounts;
// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
//# sourceMappingURL=Discount.orm.js.map