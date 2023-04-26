import { Log } from "./Log/Log";
import { Sender } from "./sender/sender";
import { Server } from "./server/server";
export class index {

  private _server: Server;
  private _sender: Sender;

  constructor() {
    this._server = new Server();
    this._sender = new Sender();

    this.Connect();
  }

  private async Connect() {
    await this._sender.Connect();
    this._sender.sendMessage(123456);
  }
}

new index();