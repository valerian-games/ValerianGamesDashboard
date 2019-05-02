import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {

  @Input() game: Game

  constructor() { }

  ngOnInit() {
  }

}
