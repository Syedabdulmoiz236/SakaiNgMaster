import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-offshift',
  templateUrl: './offshift.component.html',
  styleUrls: ['./offshift.component.scss']
})
export class OffshiftComponent implements OnInit {
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
      { label: 'Refer To Service Coverage', routerLink: 'refer' },
      { label: 'Do we have ', routerLink: 'oncall' },

     
  
  ];
  }

}
