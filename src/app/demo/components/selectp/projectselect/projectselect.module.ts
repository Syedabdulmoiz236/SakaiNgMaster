import { ButtonModule } from 'primeng/button';
import { ProjectSelectRoutingModule } from './projectselect-routing.module';
import { ProjectselectComponent } from './projectselect.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        ProjectSelectRoutingModule,
        AutoCompleteModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule
    ],
    declarations: [ProjectselectComponent]
})
export class ProjectSelectModule { }