import { Log } from "../Log/Log";
import { senderConfig } from "./senderConfig";
import * as WS from 'ws';

export class Sender {
  public static instance: Sender;
  private _ws: WS.WebSocket;

  constructor() {
    Sender.instance = this;
  }

  Connect() {
    this._ws = new WS.WebSocket(senderConfig.Host);
    return new Promise(((resolve, reject) => {
      this._ws.onopen = function (e:WS.Event) {
        resolve(0);
      }
    }).bind(this));

  }

  public sendMessage(message: any) {
    this._ws.send(message);
  }
}