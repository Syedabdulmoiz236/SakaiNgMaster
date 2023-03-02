import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cothers',
  templateUrl: './cothers.component.html',
  styleUrls: ['./cothers.component.scss']
})
export class CothersComponent implements OnInit {

  onSubmit(){
    this.valCheck=this.valCheck.filter(x=>x.valueOf)
this.isValid=true
}
GetSelectedBox(event:any){
  console.log(event ,this.valCheck)
}
isValid:boolean=false;
countries: any[] = []
    filteredCountries: any[] = [];

    selectedCountryAdvanced: any[] = [];
    scrollableItems!: MenuItem[];
    activeItem2!: MenuItem;

    valSlider = 50;

    valColor = '#424242';

    valRadio: string = '';

    valCheck: string[] = [];

    valCheck2: boolean = false;

    valSwitch: boolean = false;

    cities: SelectItem[] = [];

    selectedList: SelectItem = { value: '' };

    selectedDrop: SelectItem = { value: '' };

    selectedMulti: any[] = [];

    valToggle = false;

    paymentOptions: any[] = [];

    valSelect1: string = "";

    valSelect2: string = "";

    valueKnob = 20;


    tieredItems!: MenuItem[];

    items!: MenuItem[] ;
   
    
    routeItems!:  MenuItem[];
    menuItems!: MenuItem[];
    plainMenuItems!: MenuItem[];


  constructor() { }

  ngOnInit(): void {
    this.scrollableItems = Array.from({ length:10}, (_, i) => ({ icon: `pi pi-fw pi-display` }));
    this.scrollableItems = [
      { label: 'Exclation', routerLink: 'exclation' },
      { label: 'Appreciations', routerLink: 'appreciations' },
      { label: 'SEM Comments ', routerLink: 'sem' },
      { label: 'Regional Head Feedback', routerLink: 'regional' },
      { label: 'Delivery Head Gets FeedBack', routerLink: 'delivery' },
      { label: 'Aggregate Feedback', routerLink: 'aggregate' },
      { label: 'Check With Bilal ', routerLink: 'check' },
      { label: 'Service Delivery Qyality', routerLink: 'servicedelivery' },
      { label: 'SLA Breaches', routerLink: 'slabreaches' },
      { label: 'Penalty liability', routerLink: 'penalty' },
      
      this.activeItem2=this.scrollableItems[0]
    
  
  ];
  }


}
