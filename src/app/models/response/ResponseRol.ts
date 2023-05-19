import { Rol } from "../model/Rol";

export class ResponseRol {
    descripcion: string;
    message: string;
    date: string;
    rol: Rol;

    constructor() {
        this.descripcion = "";
        this.message = "";
        this.date = "";
        this.rol = new Rol();
    }
}