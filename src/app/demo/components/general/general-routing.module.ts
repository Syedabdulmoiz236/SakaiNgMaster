import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'bp', loadChildren: () => import('./bp/bp.module').then(m => m.BpModule) },
    ])],
    exports: [RouterModule]
})
export class GeneralRoutingModule { }
