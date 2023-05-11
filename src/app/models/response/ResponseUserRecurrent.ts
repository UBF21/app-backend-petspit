import { UserRecurrent } from "../model/UserRecurrent";

export class ResponseUserCurrent{
    username:string;
    message:string;
    date:string;
    user:UserRecurrent;

    constructor()
    {
        this.username = "";
        this.message = "";
        this.date = "";
        this.user = new UserRecurrent();
    }
}