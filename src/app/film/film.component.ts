import { Component, OnInit, Input} from '@angular/core';
import {Film} from "../models/film";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  public film: Film = {
    id: 1,
    name: 'ghwehwerh'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
