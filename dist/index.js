"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const server_1 = require("./server/server");
class index {
    constructor() {
        this._server = new server_1.Server();
    }
}
exports.index = index;
new index();
