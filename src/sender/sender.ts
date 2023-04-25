import { Log } from "../Log/Log";
import { senderConfig } from "./senderConfig";
import * as WS from 'ws';

export class Sender {
  public static instance: Sender;
  private _ws: WS.WebSocket;

  constructor() {
    Sender.instance = this;
    this._ws = new WS.WebSocket(senderConfig.Host);
    Log('连接初始化成功')
    this._ws.onopen = this.OnOpne;
  }
  
  private OnOpne(e: WS.Event) {
    Log('连接开启')
    Log(e);
  }
  
  public sendMessage(message: any) {
    this._ws.send(message);
  }
}