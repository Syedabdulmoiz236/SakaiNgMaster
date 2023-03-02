import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'pnlactual', loadChildren: () => import('./pnlactual/pnl.module').then(m => m.PnlActualModule) },
        { path: 'utilization', loadChildren: () => import('./utilization/utilization.module').then(m => m.UtilizationModule) },
        { path: 'offshift', loadChildren: () => import('./offshift/offshift.module').then(m => m.OffshiftModule) },
        { path: 'hours-submission', loadChildren: () => import('./hours-submission/hours-submission.module').then(m => m.HoursSubmissionModule) },
        {path:'management-level', loadChildren:()=> import('./management-level/management-level.module').then(m=>m.ManagementLevelModule)},
        {path:'others-financial', loadChildren:()=> import('./others-financial/others-financial.module').then(m=>m.OthersFinancialModule)}

    ])],
    exports: [RouterModule]
})
export class FinancialRoutingModule { }
