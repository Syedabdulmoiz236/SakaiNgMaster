import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangeReleaseComponent } from './change-release.component';
@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: ChangeReleaseComponent }
	])],
    exports: [RouterModule]
})
export class ChangeReleaseRoutingModule{}