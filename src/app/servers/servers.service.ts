import { Server } from './servers.model';
import { element } from 'protractor';

export class ServerService{
    servers:Server[]=[
        {id:1,name:'Test Server',status:'online'},
        {id:2,name:'Dev Server',status:'online'},
        {id:3,name:'sample server',status:'unknown'}
    ];

    getServers(){
        return this.servers;
    }

    getServer(id:number):Server{
        return this.servers.find((ele) =>{
            return ele.id === id;
        });
    }
}