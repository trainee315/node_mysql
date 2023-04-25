"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LogContral = void 0;
class LogContral {
}
// 是否开启log
LogContral.CanLog = true;
// 提示log关闭的标记
LogContral.Flag_tip_closed = false;
exports.LogContral = LogContral;
function Log(message, ...optionalParams) {
    if (LogContral.CanLog) {
        console.log(message, ...optionalParams);
    }
    else {
        if (!LogContral.Flag_tip_closed) {
            LogContral.Flag_tip_closed = true;
            console.log('log closed');
        }
    }
}
exports.Log = Log;
