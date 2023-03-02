import { QualityComponent } from './quality.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: QualityComponent }
	])],
	exports: [RouterModule]
})
export class QualityRoutingModule { }
