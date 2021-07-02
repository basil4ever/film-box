import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor.component';
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [ActorComponent],
    imports: [
        CommonModule,
        FlexModule
    ]
})
export class ActorModule { }
