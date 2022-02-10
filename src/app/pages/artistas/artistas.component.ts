import { Component, OnInit } from '@angular/core';
import { Artista } from 'src/models/artista.model';
import { ArtistasService } from "../../services/artistas.service";

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
  public artistas!:Artista[];

  constructor(
    private artistaService: ArtistasService
  ) { }

  ngOnInit(): void {
    this.artistaService.getAllArtist()
    .subscribe(data=>{
      this.artistas = data;
      console.log(this.artistas);

    })
  }

}
