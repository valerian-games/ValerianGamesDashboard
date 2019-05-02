import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/interfaces/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  game: Game = {
    name: 'Game 01',
    description: "Lorem ipsum",
    image: 'https://bulma.io/images/placeholders/1280x960.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
