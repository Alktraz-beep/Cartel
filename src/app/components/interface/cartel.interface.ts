import { NonNullableFormBuilder } from "@angular/forms";

//INTERFAZ QUE INSTANCIA EL CARTEL PARA SU GUARDADO Y PRESENTACIÓN
export class Cartel{
    nombre!:string;
    id!: number;
    titulo!: string;
    formato!: string;
    intro!: string;
    objetivos!: string;
    metodologia!: string;
    resultados!: string;
    imagenes!: string;
    graficas!: string;
    conclusion!: string;
    referencias!: string;
    datos_contacto!: string;
    agradecimientos!: string;
    colores!: string;
}