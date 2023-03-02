import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {
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
      { label: 'Weekly Repport if aplicable', routerLink: 'weeklyreport' },
      { label: 'Monthly Report', routerLink: 'monthlyreport' },
      { label: 'Quaterly Report if aplicable ', routerLink: 'quaterly' },
      { label: 'Annual Service Report', routerLink: 'anual' },

     
  
  ];
  }


}
