import { TabMenuModule } from 'primeng/tabmenu';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem,MessageService, SelectItem } from 'primeng/api';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
  selector: 'app-resource-knowledge',
  templateUrl: './resource-knowledge.component.html',
  styleUrls: ['./resource-knowledge.component.scss'],
  styles: [`
  :host ::ng-deep .p-message {
			margin-left: .25em;
		}
  :host ::ng-deep .p-multiselect {
      min-width: 15rem;
  }

  :host ::ng-deep .multiselect-custom-virtual-scroll .p-multiselect {
      min-width: 20rem;
  }

  :host ::ng-deep .multiselect-custom .p-multiselect-label {
      padding-top: .25rem;
      padding-bottom: .25rem;

  }

  :host ::ng-deep .multiselect-custom .country-item.country-item-value {
      padding: .25rem .5rem;
      border-radius: 3px;
      display: inline-flex;
      margin-right: .5rem;
      background-color: var(--primary-color);
      color: var(--primary-color-text);
  }

  :host ::ng-deep .multiselect-custom .country-item.country-item-value img.flag {
      width: 17px;
  }

  :host ::ng-deep .multiselect-custom .country-item {
      display: flex;
      align-items: center;
  }

  :host ::ng-deep .multiselect-custom .country-item img.flag {
      width: 18px;
      margin-right: .5rem;
  }

  :host ::ng-deep .multiselect-custom .country-placeholder {
      padding: 0.25rem;
  }

  :host ::ng-deep .p-colorpicker {
      width: 2.5em
  }
`],
providers: [MessageService]

})
export class ResourceKnowledgeComponent implements OnInit {
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

    constructor(private countryService: CountryService ,  private service: MessageService  ) {}

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });

        this.routeItems = [
            { label: 'Bar', routerLink: 'bar' },
            { label: 'OpsDBA', routerLink: 'opsdba' },
            { label: 'PerfDBA', routerLink: 'perfdba' },
            { label: 'ETL', routerLink: 'etl' },
        ];

    }
    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
    onTabclick(i:number){
        console.log(this.routeItems[i])
    }
}

