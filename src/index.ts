import { Log } from "./Log/Log";
import { Sender } from "./sender/sender";
import { Server } from "./server/server";
export class index {
  
  private _server: Server;
  private _sender: Sender;
  
  constructor() {
      this._server = new Server();
    Log('[服务器初始化完成]');
  }
}

new index();