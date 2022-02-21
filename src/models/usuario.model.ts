import { Comic } from "./comic.model";

export interface Usuario{
  _id :string,
  roles: [string],
  Kart : [string],
  love : [string],
  username : string,
  email : string,
  password: string,
  verify: boolean,
  createdAt :Date,
  updatedAt : Date
}
