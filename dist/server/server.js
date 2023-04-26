"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const WS = require("ws");
const serverConst_1 = require("./serverConst");
const Log_1 = require("../Log/Log");
class Server {
    constructor() {
        this._ws = new WS.Server({ port: serverConst_1.serverConst.PORT });
        this._ws.on('connection', this.OnConnection);
    }
    OnConnection(ws) {
        console.log('sever connected!');
        this._ws.on('message', this.OnMessage);
    }
    OnMessage(message) {
        (0, Log_1.Log)(message);
    }
}
exports.Server = Server;
