import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'msoperations', loadChildren: () => import('./msoperations/msoperations.module').then(m => m.MsOperationsModule) },
    ])],
    exports: [RouterModule]
})
export class MsRoutingModule { }
