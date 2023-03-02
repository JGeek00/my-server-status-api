"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cpu_route_1 = __importDefault(require("./cpu.route"));
const memory_route_1 = __importDefault(require("./memory.route"));
const system_route_1 = __importDefault(require("./system.route"));
const router = (0, express_1.Router)();
router.get('/cpu', cpu_route_1.default);
router.get('/memory', memory_route_1.default);
router.get('/system', system_route_1.default);
exports.default = router;
