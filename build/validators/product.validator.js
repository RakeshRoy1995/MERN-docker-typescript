"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const express_validator_1 = require("express-validator");
exports.createProductSchema = [
    (0, express_validator_1.body)('name', 'Product name is required').isString(),
    (0, express_validator_1.body)('price', 'Price is required').isString(),
    (0, express_validator_1.body)('description', 'Description is required').isString(),
    (0, express_validator_1.body)('status', 'Status is required').isString(),
];
exports.updateProductSchema = [
    (0, express_validator_1.body)('name', 'Product name is required').isString(),
    (0, express_validator_1.body)('price', 'Price is required').isString(),
    (0, express_validator_1.body)('description', 'Description is required').isString(),
    (0, express_validator_1.body)('status', 'Status is required').isString(),
];
