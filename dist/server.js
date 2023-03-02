"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_json_1 = __importDefault(require("./config/api.json"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.set('port', (_a = process.env.PORT) !== null && _a !== void 0 ? _a : api_json_1.default.defaultPort);
server.use('/', routes_1.default);
exports.default = server;
