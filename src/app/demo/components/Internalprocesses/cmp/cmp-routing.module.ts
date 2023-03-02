import { CmpComponent } from './cmp.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: CmpComponent }
	])],
    exports: [RouterModule]
})
export class CmpRoutingModule{}