import { RunbookComponent } from './runbook.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: RunbookComponent }
	])],
    exports: [RouterModule]
})
export class RunbookRoutingModule{}