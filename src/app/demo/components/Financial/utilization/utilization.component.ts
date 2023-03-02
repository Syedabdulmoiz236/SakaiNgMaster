import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-utilization',
  templateUrl: './utilization.component.html',
  styleUrls: ['./utilization.component.scss']
})
export class UtilizationComponent implements OnInit {
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
    this.routeItems = [
      { label: 'FTE', routerLink: 'fte' },
      { label: 'Ops DBA', routerLink: 'utops' },
      { label: 'Bar', routerLink: 'utbar' },
      { label: 'Per DBA', routerLink: 'utperf' },
      { label: 'Billable Hours', routerLink: 'bilable' },
     
  
  ];
  }

}
