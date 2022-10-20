import { OthersRoutingModule } from './others-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';

@NgModule({
    imports:[ 
        CommonModule,
        OthersRoutingModule
     ],
     declarations:[OthersComponent]
})
export class OthersModule{}