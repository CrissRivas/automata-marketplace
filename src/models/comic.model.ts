export interface Comic{
  _id:string,
  nombre: string,
    nombreId: string,
    envio: {
        weight: number,
        width: number,
        depth: number,
        height: number
    },
    descripcion: string,
    descripcionCorta: string,
    engranes: number,
    tags: [string],
    precio: number,
    imgUrl: [string],
    inventario: number,
    proveedor: string,
    casa: string,
    origin: string
}
