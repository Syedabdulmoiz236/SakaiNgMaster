import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FteCountPnlComponent } from './fte-count-pnl.component';

@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: FteCountPnlComponent }
	])],
	exports: [RouterModule]  
})
export class FteCountPnlRoutingModule{ }