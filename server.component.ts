import { Component } from '@angular/core';
@Component({
  selector : 'app-server',
  templateUrl : './server.component.html'
})
export class ServerComponent{
  serverId: number=10;
  serverName: string='online';

  getserverstatus(){
    return this.serverName;
  }
}
