import { SlaResoulutionComponent } from './sla/slaresoulution.component';
import { ComentsResoComponent } from './sla/comentreso.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentsSlaComponent } from './sla/comentsla.component';
import { ReportedComponent } from './sla/reported.component';
import { ResponseSlaComponent } from './sla/responsesla.component';
@NgModule({
    declarations: [ 
      
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        
    ],
})
export class CustomerModule{}