import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Artista } from 'src/models/artista.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() artista!:Artista;

  constructor() { }
  ngOnInit(): void {
  }

}
