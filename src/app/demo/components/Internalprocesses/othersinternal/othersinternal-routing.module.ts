import { OthersinternalComponent } from './othersinternal.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: OthersinternalComponent }
	])],
    exports: [RouterModule]
})
export class OthersinternalRoutingModule{}