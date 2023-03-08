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
const getStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const { cpuCurrentSpeed, cpuTemperature, mem, fsSize, currentLoad, } = yield systeminformation_1.default.get({
        cpuCurrentSpeed: data_json_1.default.status.cpuSpeed.join(","),
        cpuTemperature: data_json_1.default.status.cpuTemperature.join(","),
        mem: data_json_1.default.status.memory.join(","),
        fsSize: data_json_1.default.status.storage.join(","),
        currentLoad: data_json_1.default.status.load.join(","),
    });
    const cpuStatus = {
        cores: Array.from({ length: cpuCurrentSpeed.cores.length }, (_, i) => {
            var _a, _b, _c;
            return ({
                speed: (_a = cpuCurrentSpeed.cores[i]) !== null && _a !== void 0 ? _a : null,
                temperature: (_b = cpuTemperature.cores[i]) !== null && _b !== void 0 ? _b : null,
                load: (_c = currentLoad.cpus[i]) !== null && _c !== void 0 ? _c : null,
            });
        }),
        average: {
            speed: cpuCurrentSpeed.main,
            temperature: cpuTemperature.main,
            load: {
                average: currentLoad.currentLoad,
                user: currentLoad.currentLoadUser,
                system: currentLoad.currentLoadSystem,
                idle: currentLoad.currentLoadIdle,
            },
        },
    };
    const memory = {
        total: (_a = mem.total) !== null && _a !== void 0 ? _a : null,
        used: (_b = mem.used) !== null && _b !== void 0 ? _b : null,
        free: (_c = mem.free) !== null && _c !== void 0 ? _c : null,
        active: (_d = mem.active) !== null && _d !== void 0 ? _d : null,
    };
    const storage = fsSize.map((item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            name: (_a = item.fs) !== null && _a !== void 0 ? _a : null,
            type: (_b = item.type) !== null && _b !== void 0 ? _b : null,
            size: (_c = item.size) !== null && _c !== void 0 ? _c : null,
            used: (_d = item.used) !== null && _d !== void 0 ? _d : null,
            available: (_e = item.available) !== null && _e !== void 0 ? _e : null,
            percentageUsed: (_f = item.use) !== null && _f !== void 0 ? _f : null,
            mount: (_g = item.mount) !== null && _g !== void 0 ? _g : null,
            writable: (_h = item.rw) !== null && _h !== void 0 ? _h : null,
        });
    });
    return {
        cpu: cpuStatus,
        socket: (_e = cpuTemperature.socket) !== null && _e !== void 0 ? _e : null,
        chipset: (_f = cpuTemperature.chipset) !== null && _f !== void 0 ? _f : null,
        memory,
        storage,
    };
});
exports.default = getStatus;
