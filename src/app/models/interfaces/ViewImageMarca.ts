import { SafeUrl } from "@angular/platform-browser";
import { Marca } from "../model/Marca";

export interface ViewImageMarca{
    name:string;
    pathName:SafeUrl;
    marca:Marca;
}