import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allownewserver = false;
  servercreation = 'server is not created';
  servername='';
  constructor(){
    setTimeout(() => {
      this.allownewserver = true;
    }, 2000);
  }

  ngOnInit() {
  }
    onserverCreation() {
      this.servercreation = 'server is created' + this.servername;
    }
    onupdateserver(event: Event){
      this.servername= (<HTMLInputElement> event.target).value;

    }
}
