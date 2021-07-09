import { Component, OnInit } from '@angular/core';
import {Actor} from "../models/actor";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  public actor: Actor = {
    id: 1,
    name: 'Budulay',
    date_of_birth: '10.03.1975',
    country: 'Moldova',
    films: ['rvjrlevlnm']
}

  constructor() { }

  ngOnInit(): void {
  }

}
