import { User } from "../model/User";

export class ResponseUser{
    username:string;
    message:string;
    date:string;
    user:User;

    constructor()
    {
        this.username = "";
        this.message = "";
        this.date = "";
        this.user = new User();
    }
}