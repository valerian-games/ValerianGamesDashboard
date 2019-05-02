import { Component, OnInit, Input } from '@angular/core';
import { Command } from '../../interfaces/command';

@Component({
  selector: 'app-card-command',
  templateUrl: './card-command.component.html',
  styleUrls: ['./card-command.component.scss']
})
export class CardCommandComponent implements OnInit {

  @Input() command: Command;

  constructor() { }

  ngOnInit() {
  }

}
