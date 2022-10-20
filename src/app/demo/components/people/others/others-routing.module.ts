import { OthersComponent } from './others.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OthersComponent }
	])],
	exports: [RouterModule]
})
export class OthersRoutingModule{}