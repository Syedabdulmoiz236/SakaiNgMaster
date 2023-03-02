import { ApiService } from './../../../api/api.service';
import { ResourceKnowledgeModel } from './resource-knowledge.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, Message, MessageService, SelectItem } from 'primeng/api';
import { CountryService } from 'src/app/demo/service/country.service';
import{FormBuilder,FormGroup}from '@angular/forms'

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
    formValue !: FormGroup;
    resourceknowledgeModelObj: ResourceKnowledgeModel=new ResourceKnowledgeModel();


    countries: any[] = [];

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

    constructor(private countryService: CountryService , private formbuilder: FormBuilder , private api:ApiService, private service: MessageService) { }

    

    ngOnInit() {
        this.formValue = this.formbuilder.group({
            textarea: [''],
        })
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
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
    postTextArea(){
        this.resourceknowledgeModelObj.textarea = this.formValue.value.textarea;
        this.api.postComment(this.resourceknowledgeModelObj)
        .subscribe(res=>{
            console.log(res);
            alert("Comment Added Successfully")
        },
        err=>{
            alert('Something went wrong')
        })
    }

    msgs: Message[] = [];

    showInfoViaToast() {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaToast() {
        this.service.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }

    showInfoViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }
}
