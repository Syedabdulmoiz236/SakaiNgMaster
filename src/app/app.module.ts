import { SelectPModule } from './demo/components/selectp/selectp.module';

import { FinancialModule } from './demo/components/Financial/Financial.module';
import { InternalprocessesModule } from './demo/components/Internalprocesses/Internalprocesses.module';
import { PeopleModule } from './demo/components/people/people.module';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ContactmatrixComponent } from './demo/components/cm/contactmatrix/contactmatrix.component';
import { BpComponent } from './demo/components/general/bp/bp.component';
import { ServiceCoverageComponent } from './demo/components/sc/service-coverage/service-coverage.component';
import { SetupComponent } from './demo/components/projectsetup/setup/setup.component';
import { SelectpComponent } from './selectp/selectp.component';
import { ProjectselectComponent } from './demo/components/selectp/projectselect/projectselect.component';



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        PeopleModule,
        InternalprocessesModule,
        FinancialModule,
        SelectPModule
        
      
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
