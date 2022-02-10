import { Component, OnInit } from '@angular/core';
import { ComicsService } from "../../services/comics.service";

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent implements OnInit {

  constructor(
    private comicSevise: ComicsService,
  ) { }

  ngOnInit(): void {

  }

}
