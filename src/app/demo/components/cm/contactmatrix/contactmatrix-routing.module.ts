import { ContactmatrixComponent } from './contactmatrix.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ContactmatrixComponent }
	])],
	exports: [RouterModule]
})
export class ContactMatrixRoutingModule { }
