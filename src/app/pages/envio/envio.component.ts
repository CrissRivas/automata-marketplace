import { Component, OnInit } from '@angular/core'
import { Usuario } from "src/models/usuario.model";
import { Comic } from 'src/models/comic.model';
import { ComicsService } from "../../services/comics.service";

import  { UsuarioService } from "../../services/usuario.service";

import { ActivatedRoute, Router } from "@angular/router";

import { KartService } from '../../services/kart.service';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent implements OnInit {

  public destination= {
    receiver: "",
    nameReceiver: "",
    lastNameReceiver: "",
    emailReceiver: "",
    phoneReceiver: "",
    addressDestination: "",
    numberDestination: "",
    codePostalDestination: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onCotizacion(formEnvio:any){

  }

}
