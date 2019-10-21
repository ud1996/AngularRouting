import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../servers.service';
import { Server } from '../servers.model';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server:Server;
 
  constructor(private route:ActivatedRoute,private serverService:ServerService,private router:Router) { }

  ngOnInit() {
    let id =+ this.route.snapshot.params['id'];//+ for converting string to number
    this.server = this.serverService.getServer(id);
    
  }

  onClick(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
