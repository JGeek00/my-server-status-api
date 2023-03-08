"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
server_1.default
    .listen(server_1.default.get("port"))
    .on("listening", () => console.log("Server listening on port", server_1.default.get("port")))
    .on("error", (e) => console.log(e));
