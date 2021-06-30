import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
  ]
})
export class FilmsModule { }
