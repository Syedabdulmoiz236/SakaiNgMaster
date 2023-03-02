import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'projectselect', loadChildren: () => import('./projectselect/projectselect.module').then(m => m.ProjectSelectModule) },
    ])],
    exports: [RouterModule]
})
export class SelectPRoutingModule { }
