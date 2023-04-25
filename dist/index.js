"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const Log_1 = require("./Log/Log");
const sender_1 = require("./sender/sender");
const server_1 = require("./server/server");
class index {
    constructor() {
        try {
            this._server = new server_1.Server();
        }
        catch (e) {
            (0, Log_1.Log)('[服务器初始化失败]', e);
        }
        (0, Log_1.Log)('[服务器初始化完成]');
        try {
            this._sender = new sender_1.Sender();
        }
        catch (e) {
            (0, Log_1.Log)('[sender 初始化失败]', e);
        }
        (0, Log_1.Log)('[sender 初始化完成]');
        this._sender.sendMessage('hello!!!');
    }
}
exports.index = index;
new index();
