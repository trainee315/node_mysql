import { Log } from "./Log/Log";
import { Sender } from "./sender/sender";
import { Server } from "./server/server";
export class index {
  
  private _server: Server;
  private _sender: Sender;
  
  constructor() {
    try{
      this._server = new Server();
    }catch(e){
      Log('[服务器初始化失败]',e);
    }
    
    Log('[服务器初始化完成]');

    try{
      this._sender = new Sender();
    }catch(e){
      Log('[sender 初始化失败]',e);
    }
    Log('[sender 初始化完成]');
    
    this._sender.sendMessage('hello!!!')
  }
}

new index();