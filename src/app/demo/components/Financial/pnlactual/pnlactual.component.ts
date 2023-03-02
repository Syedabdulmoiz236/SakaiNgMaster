import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pnlactual',
  templateUrl: './pnlactual.component.html',
  styleUrls: ['./pnlactual.component.scss']
})
export class PnlactualComponent implements OnInit {
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
      { label: 'Per PnL', routerLink: 'perpnl' },
      { label: 'Ops DBA', routerLink: 'opsdba-one' },
      { label: 'Actual Headcound', routerLink: 'actual-headcount' },
      { label: 'Perf DBA', routerLink: 'perfdbaa' },
      { label: 'ETL', routerLink: 'opsdba-two' },
     
  
  ];

  }


}
