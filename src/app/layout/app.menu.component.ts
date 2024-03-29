import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Project Setup',
                items: [
                    { label: 'Project Setup', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'People',

                items:[
                    {label: 'People',
                     icon:'pi pi-fw pi-users',
                    items:[
                        {label: 'Resource Knowledge Gap',
                     icon:'pi pi-circle',
                    routerLink:['/people/resource-knowledge'],
                    
                        },

                        {label: 'Resource Training Req',
                        icon:'pi pi-circle',
                        routerLink:['/people/resource-training']
                           },
                           
                           {label: 'FTE Count vs P&L',
                           icon:'pi pi-circle',
                           routerLink:['/people/fte-count-pnl']
                              },
                        {label: 'Technology Skills Req',
                        icon:'pi pi-circle',
                        routerLink:['/people/technology-skills']
                           },
                           {label: 'Rotation / Retention',
                        icon:'pi pi-circle',
                        routerLink:['/people/rotation-retention']
                       
                           },
                           {label: 'Others',
                        icon:'pi pi-circle',
                        routerLink:['/people/others']
                           },

                    ]
                }
                ]
            },
            {
                label: 'Internal Process',
                items: [
                    { label: 'Internal Process', icon: 'pi pi-fw pi-th-large', 
                    items:[
                        {
                            label:'RunBook',
                            icon:'pi pi-circle',
                            routerLink:['/Internalprocesses/runbook']
                        },
                        {
                            label:'Inovation/Automation',
                            icon:'pi pi-circle',
                            routerLink:['/Internalprocesses/inovation-automation']
                        },
                        {
                            label:'BCP',
                            icon:'pi pi-circle',
                            routerLink:['/Internalprocesses/bcp']
                        },
                        {
                            label:'CMP',
                            icon:'pi pi-circle',
                            routerLink:['/Internalprocesses/cmp']
                        },
                        {
                            label:'Operational Tool',
                            icon:'pi pi-circle',
                            routerLink:['/Internalprocesses/operational-tools']
                        },
                        {
                            label:'Change Release Mgt',
                            icon:'pi pi-circle',
                            routerLink:['/Internalprocesses/change-release']
                        },
                        {
                            label:'Others',
                            icon:'pi pi-circle',
                            routerLink:['/Internalprocesses/othersinternal']
                         
                        },

                    ]
                }
                ]
            },
            {
                label: 'Financial',
                items: [
                    { label: 'Financial', icon: 'pi pi-fw pi-dollar',
                    items:[
                        {
                            label:'P&L Vs Actual',
                            icon:'pi pi-circle',
                            routerLink:['/Financial/pnlactual']
                        },
                        {
                            label:'Utilization/Partial Billable',
                            icon:'pi pi-circle',
                            routerLink:['/Financial/utilization']
                        },
                        {
                            label:'Off-Shift',
                            icon:'pi pi-circle',
                            routerLink:['Financial/offshift']
                        },
                        {
                            label:'Hours Submission',
                            icon:'pi pi-circle',
                            routerLink:['Financial/hours-submission']
                        },
                        {
                            label:'Management Level',
                            icon:'pi pi-circle',
                            routerLink:['Financial/management-level']
                        },
                        {
                            label:'Others',
                            icon:'pi pi-circle',
                            routerLink:['/Financial/others-financial']
                         
                        },

                    ]
                }
                ]
            },
            {
                label: 'Customer',
                items: [
                    { label: 'Customer', icon: 'pi pi-fw pi-user-edit', routerLink: ['/'],
                    items:[
                        {
                            label:'Quality Of Service',
                            icon:'pi pi-circle',
                            routerLink:['/customer/quality']
                        },
                        {
                            label:'SLA',
                            icon:'pi pi-circle',
                            routerLink:['/customer/sla']
                        },
                        {
                            label:'Incident',
                            icon:'pi pi-circle',
                            routerLink:['/customer/incident']
                        },
                        {
                            label:'Responce',
                            icon:'pi pi-circle',
                            routerLink:['/customer/responce']
                        },
                        {
                            label:'Reporting',
                            icon:'pi pi-circle',
                            routerLink:['/customer/reporting']
                        },
                        {
                            label:'Others',
                            icon:'pi pi-circle',
                            routerLink:['/customer/cothers']
                        },

                    ]
                }
                ]
            },
            {
                label: 'MS Operation',
                items: [
                    { label: 'MS Operation', icon: 'pi pi-fw pi-cog', routerLink: ['ms/msoperations'] }
                ]
            },
            {
                label: 'Contact Matrix',
                items: [
                    { label: 'Contact Matrix', icon: 'pi pi-fw pi-sort-up', routerLink: ['cm/contactmatrix'] }
                ]
            },
            {
                label: 'General Best Practice',
                items: [
                    { label: 'General Best Practice', icon: 'pi pi-fw pi-book', routerLink: ['general/bp'] }
                
                ]
            },
          
           
            {
                label: 'Service Coverage',
                items: [
                    { label: 'Service Coverage', icon: 'pi pi-fw pi-wrench', routerLink: ['sc/service-coverage'] }
                ]
            },
           
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon' },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Prime Blocks',
                items: [
                    { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            },
            {
                label: 'Utilities',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
                    }
                ]
            }
        ];
    }
}
