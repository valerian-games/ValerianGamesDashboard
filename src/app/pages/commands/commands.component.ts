import { Component, OnInit } from '@angular/core';
import { Command } from 'src/app/shared/interfaces/command';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  command: Command = { 
    command: 'die',
    description: 'Kill the character.',
    createdBy: 'admin',
    createdAt: null,
    public: true,
    games: ['game-01']
  }

  constructor() { }

  ngOnInit() {
  }

}
