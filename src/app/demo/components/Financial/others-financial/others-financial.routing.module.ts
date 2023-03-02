import { OthersFinancialComponent } from './others-financial.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OthersFinancialComponent }
	])],
	exports: [RouterModule]
})
export class OthersFinancialRoutingModule { }
