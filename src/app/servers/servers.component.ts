import { Component, OnInit } from '@angular/core';
import { Server } from './servers.model';
import { ServerService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:Server[];
  constructor(private serverService:ServerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }

  onClick(){
    this.router.navigate(['/servers'],{relativeTo:this.route});
  }

}
//inject the servoce and get thr data in constructor