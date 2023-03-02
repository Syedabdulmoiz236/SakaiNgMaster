import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'contactmatrix', loadChildren: () => import('./contactmatrix/contactmatrix.module').then(m => m.ContactMatrixModule) },
    ])],
    exports: [RouterModule]
})
export class CmRoutingModule { }
