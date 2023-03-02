import { InovationAutomationComponent } from './inovation-automation.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
 
        imports: [RouterModule.forChild([
            { path: '', component: InovationAutomationComponent }
        ])],
        exports: [RouterModule]
    
})
export class InovationAutomationRoutingModule{}