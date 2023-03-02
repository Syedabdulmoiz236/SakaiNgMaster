import { ProjectselectComponent } from './demo/components/selectp/projectselect/projectselect.component';
import { EmptyDemoComponent } from './demo/components/pages/empty/emptydemo.component';
import { LoginComponent } from './demo/components/auth/login/login.component';

import { RouterModule, } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({

    imports: [
      
        RouterModule.forRoot([
            {
                
                path:'', component: LoginComponent
            }
        ]),
        RouterModule.forRoot([
            {
                
                path:'ProjectSelectComponent', component: ProjectselectComponent
            }
        ]),
        
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'people', loadChildren: () => import('./demo/components/people/people.module').then(m => m.PeopleModule) },
                    {path:'Internalprocesses', loadChildren:()=> import('./demo/components/Internalprocesses/Internalprocesses.module').then(m=>m.InternalprocessesModule)},
                    {path:'Financial', loadChildren:()=> import('./demo/components/Financial/Financial.module').then(m=>m.FinancialModule)},
                    {path:'customer', loadChildren:()=> import('./demo/components/customer/customer.module').then(m=>m.CustomerModule)},
                    {path:'ms', loadChildren:()=> import('./demo/components/ms/ms.module').then(m=>m.MsModule)},
                    {path:'cm', loadChildren:()=> import('./demo/components/cm/cm.module').then(m=>m.CmModule)},
                    {path:'general', loadChildren:()=> import('./demo/components/general/general.module').then(m=>m.GeneralModule)},
                    {path:'sc', loadChildren:()=> import('./demo/components/sc/sc.module').then(m=>m.ScModule)},
                        
                ],
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ],
        
        { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' }),
        
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
