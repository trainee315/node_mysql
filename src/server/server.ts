import * as WS from 'ws';
import { serverConst } from './serverConst';
import { Log } from '../Log/Log';

export class Server {

  // 单例
  public static Instance: Server;
  // webscoket实例
  private _ws: WS.Server;

  constructor() {
    this._ws = new WS.Server({ port: serverConst.PORT });
    this._ws.on('message', this.OnConnection);
  }

  private OnConnection(ws: WS.Server) {
    Log('client connected');
    this._ws.on('message', this.OnMessage);
  }

  private OnMessage(message) {
    Log(message);
  }
}
