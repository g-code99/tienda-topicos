"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.SupplierController = void 0;
const tsoa_1 = require("tsoa");
const logger_1 = require("../utils/logger");
// ORM
const Supplier_orm_1 = require("../domain/orm/Supplier.orm");
let SupplierController = class SupplierController {
    /**
     * Endpoint to retreive the suppliers in the Collection "Suppliers" of Database
     * @returns all Suppliers
     */
    getSuppliers() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)("[/api/v1/suppliers] Get All Suppliers Request");
            const response = yield (0, Supplier_orm_1.getAllSuppliers)();
            return response;
        });
    }
};
SupplierController = __decorate([
    (0, tsoa_1.Route)("/api/v1/suppliers"),
    (0, tsoa_1.Tags)("SuppliersController")
], SupplierController);
exports.SupplierController = SupplierController;
//# sourceMappingURL=SupplierController.js.map