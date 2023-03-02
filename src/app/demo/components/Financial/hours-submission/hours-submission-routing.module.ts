import { HoursSubmissionComponent } from './hours-submission.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: HoursSubmissionComponent }
	])],
	exports: [RouterModule]
})
export class HoursSubmissionRoutingModule { }
