import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
@Component({
  selector: 'app-resource-knowledge',
  templateUrl: './resource-knowledge.component.html',
  styleUrls: ['./resource-knowledge.component.scss'],
  styles: [`
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
`]
})
export class ResourceKnowledgeComponent implements OnInit , OnDestroy{
    items!: MenuItem[];
    countries: any[] = [];
    valRadio: string = '';
    
    filteredCountries: any[] = [];

    selectedCountryAdvanced: any[] = [];

    valSlider = 50;

    valColor = '#424242';

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
    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
piedata: any;
pieOptions: any;

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.layoutService
        });
    }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
 
    
  

   

}
