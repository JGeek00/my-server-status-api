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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const systeminformation_1 = __importDefault(require("systeminformation"));
const data_json_1 = __importDefault(require("../config/data.json"));
const getSystemInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield systeminformation_1.default.get({
        system: data_json_1.default.system.system.join(','),
        bios: data_json_1.default.system.bios.join(','),
        baseboard: data_json_1.default.system.baseboard.join(','),
        chassis: data_json_1.default.system.chassis.join(',')
    });
});
exports.default = getSystemInfo;
