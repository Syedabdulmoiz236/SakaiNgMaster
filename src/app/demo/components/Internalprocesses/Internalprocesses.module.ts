import { InternalprocessesRoutingModule } from './Inernalprocesses-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@NgModule({
    declarations: [     
  ],
    imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      InternalprocessesRoutingModule
      
      
  
    
    ]
  })
  export class InternalprocessesModule{}