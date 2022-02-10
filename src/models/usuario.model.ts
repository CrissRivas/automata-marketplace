import { Comic } from "./comic.model";

export interface Artista{
  _id :string,
  role: string,
  comicsKart : Comic[],
  nombre : string,
  imgPerfil : string,
  descripcion: string,
  descripcionCorta: string,
  createdAt :Date,
  updatedAt : Date
}
