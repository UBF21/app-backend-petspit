import { SafeUrl } from "@angular/platform-browser";
import { Product } from "../model/Product";

export interface ViewImageProduct{
    name:string;
    pathName:SafeUrl;
    product:Product;
}