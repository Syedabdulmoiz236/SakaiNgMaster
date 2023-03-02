import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PnlactualComponent } from './pnlactual.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PnlactualComponent }
	])],
	exports: [RouterModule]
})
export class PnlActualRoutingModule { }
