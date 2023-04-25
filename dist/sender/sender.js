"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = void 0;
const Log_1 = require("../Log/Log");
const senderConfig_1 = require("./senderConfig");
const WS = require("ws");
class Sender {
    constructor() {
        Sender.instance = this;
        this._ws = new WS.WebSocket(senderConfig_1.senderConfig.Host);
        (0, Log_1.Log)('连接初始化成功');
        this._ws.onopen = this.OnOpne;
    }
    OnOpne(e) {
        (0, Log_1.Log)('连接开启');
        (0, Log_1.Log)(e);
    }
    sendMessage(message) {
        this._ws.send(message);
    }
}
exports.Sender = Sender;
