import { user } from './users.model';

export class UserService{

    users:user[]=[
        {id:1,name:"utkarsh"},
        {id:2,name:"sneha"},
        {id:3,name:"shivanshu"}
    ];

    getUser(){
        return this.users;
    }
}