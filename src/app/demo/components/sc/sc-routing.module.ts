import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'service-coverage', loadChildren: () => import('./service-coverage/service-coverage.module').then(m => m.ServiceCoverageModule) },
    ])],
    exports: [RouterModule]
})
export class ScRoutingModule { }
