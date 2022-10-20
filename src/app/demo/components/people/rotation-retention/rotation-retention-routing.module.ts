import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RotationRetentionComponent } from './rotation-retention.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: RotationRetentionComponent }
	])],
	exports: [RouterModule]
})
export class RotationRetentionRoutingModule{}