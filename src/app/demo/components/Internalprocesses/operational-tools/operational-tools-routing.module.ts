import { OperationalToolsComponent } from './operational-tools.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: OperationalToolsComponent }
	])],
    exports: [RouterModule]
})
export class OperationalToolsRoutingModule{}