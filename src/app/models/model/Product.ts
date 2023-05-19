import { Animal } from "./Animal";
import { Category } from "./Category";
import { EtapaVida } from "./EtapaVida";
import { Marca } from "./Marca";
import { SubCategory } from "./SubCategory";
import { TamanioRaza } from "./TamanioRaza";

export class Product {
    idProduct: number;
    titulo: string;
    descripcion: string;
    precio: number;
    peso: number;
    stock: number;
    contenidoNutricional: string;
    imagen: string;
    estado: string;
    idCategory: number;
    idTamanioRaza: number;
    idMarca: number;
    idAnimal: number;
    idEtapaVida: number;
    idSubCategory: number;
    category:Category;
    tamanioRaza:TamanioRaza;
    marca:Marca;
    etapaVida:EtapaVida;
    subCategory:SubCategory;
    animal:Animal;                                              

    constructor() {
        this.idProduct = 0;
        this.titulo = "";
        this.descripcion = "";
        this.precio = 0;
        this.peso = 0;
        this.stock = 0;
        this.contenidoNutricional = "";
        this.imagen = "";
        this.estado = "";
        this.idCategory = 0;
        this.idTamanioRaza = 0;
        this.idMarca = 0;
        this.idAnimal = 0;
        this.idEtapaVida = 0;
        this.idSubCategory = 0;
        this.category = new Category();
        this.tamanioRaza = new TamanioRaza();
        this.marca = new Marca();
        this.etapaVida = new EtapaVida();
        this.subCategory = new SubCategory();
        this.animal = new Animal();      
    }
}