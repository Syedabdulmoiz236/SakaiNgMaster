import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

@NgModule({
    imports:[RouterModule.forChild([
        { path: 'runbook', loadChildren: () => import('./runbook/runbook.module').then(m => m.RunbookModule) },
        { path: 'inovation-automation', loadChildren:()=> import('./inovation-automation/inovation-automation.module').then(m=>m.InovationAutomationModule)},
        { path: 'bcp', loadChildren:()=> import('./bcp/bcp.module').then(m=>m.BcpModule)},
        { path: 'cmp', loadChildren:()=> import('./cmp/cmp.module').then(m=>m.CmpModule)},
        { path: 'operational-tools', loadChildren:()=> import('./operational-tools/operational-tools.module').then(m=>m.OperationalToolsModule)},
        { path: 'othersinternal', loadChildren:()=> import('./othersinternal/othersinternal.module').then(m=>m.OthersinternalModule)},
        { path: 'change-release', loadChildren:()=> import('./change-release/change-release.module').then(m=>m.ChangeReleaseModule)},
    ])],
    exports:[RouterModule]
})
export class InternalprocessesRoutingModule{}