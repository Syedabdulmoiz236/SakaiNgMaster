
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotationRetentionComponent } from './rotation-retention.component';
import { RotationRetentionRoutingModule,} from './rotation-retention-routing.module';

@NgModule({
    imports:[
        CommonModule,
        RotationRetentionRoutingModule
    ],
    declarations:[RotationRetentionComponent]
})
export class RotationRetentionModule{}
