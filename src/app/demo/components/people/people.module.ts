import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [     
    
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    RouterModule,
    ButtonModule,

    
    

  
  ]
})
export class PeopleModule { }
