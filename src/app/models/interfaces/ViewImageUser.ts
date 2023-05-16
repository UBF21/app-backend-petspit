import { SafeUrl } from "@angular/platform-browser";
import { User } from "../model/User";

export interface ViewImageUser{
    name:string;
    pathName:SafeUrl;
    user:User;
}