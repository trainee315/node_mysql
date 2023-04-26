"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = void 0;
const senderConfig_1 = require("./senderConfig");
const WS = require("ws");
class Sender {
    constructor() {
        Sender.instance = this;
    }
    Connect() {
        this._ws = new WS.WebSocket(senderConfig_1.senderConfig.Host);
        return new Promise(((resolve, reject) => {
            this._ws.onopen = function (e) {
                resolve(0);
            };
        }).bind(this));
    }
    sendMessage(message) {
        this._ws.send(message);
    }
}
exports.Sender = Sender;
