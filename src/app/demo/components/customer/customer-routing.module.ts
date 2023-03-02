import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[RouterModule.forChild([
        { path: 'incident', loadChildren: () => import('./incident/incident.module').then(m => m.IncidentModule) },
        { path: 'quality', loadChildren: () => import('./quality/quality.module').then(m => m.QualityModule) },
        { path: 'reporting', loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule) },
        { path: 'responce', loadChildren: () => import('./responce/reponce.module').then(m => m.ResponceModule) },
        { path: 'sla', loadChildren: () => import('./sla/sla.module').then(m => m.SlaModule) },
        { path: 'cothers', loadChildren: () => import('./cothers/cothers.module').then(m => m.COthersModule) },
        

    ])
        
    ],
    exports:[RouterModule]
})
export class CustomerRoutingModule{}