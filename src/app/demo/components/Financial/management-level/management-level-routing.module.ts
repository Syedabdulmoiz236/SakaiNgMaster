import { ManagementLevelComponent } from './management-level.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ManagementLevelComponent }
	])],
	exports: [RouterModule]
})
export class ManagementLevelRoutingModule { }
