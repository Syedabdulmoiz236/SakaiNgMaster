import { BcpComponent } from './bcp.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: BcpComponent }
	])],
    exports: [RouterModule]
})
export class BcpRoutingModule{}