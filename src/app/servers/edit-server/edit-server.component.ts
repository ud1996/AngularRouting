import { Component, OnInit } from '@angular/core';
import { Server } from '../servers.model';
import { ServerService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server:Server;
  constructor(private serverService:ServerService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id =+ this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(id);
  }

}
