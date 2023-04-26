"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const Log_1 = require("./Log/Log");
const server_1 = require("./server/server");
class index {
    constructor() {
        this._server = new server_1.Server();
        (0, Log_1.Log)('[服务器初始化完成]');
    }
}
exports.index = index;
new index();
