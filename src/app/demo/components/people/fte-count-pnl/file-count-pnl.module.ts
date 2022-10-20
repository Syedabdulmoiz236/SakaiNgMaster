import { FteCountPnlRoutingModule } from './file-count-pnl-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FteCountPnlComponent } from './fte-count-pnl.component';


@NgModule({
    imports:[
        CommonModule,
        FteCountPnlRoutingModule
    ],
    declarations:[FteCountPnlComponent]
})
export class FteCountPnlModule{}

