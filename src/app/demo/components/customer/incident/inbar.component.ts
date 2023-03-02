import { InBarModel } from './incident.model';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ApiService } from 'src/app/demo/api/api.service';
@Component({
    selector:'app-inbar',
    styles:[`
	:host ::ng-deep .p-button-rounded{
		margin-left: 95%}
	`],
    template: `
    <div class="card" *ngIf="cancel">
    <button (click)="onCancel()" pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text mr-2 mb-2"></button>

      <form [formGroup]="formValue"> 
          <h4>Bar</h4>
          <h5>Compliance</h5>
          <div class="grid formgrid">
          <div class="col-12 md:col-4">
              <div class="field-radiobutton">
                  <p-radioButton  (onClick)="postInBarDetails()" value="Yes" [(ngModel)]="valRadio" id="city1" formControlName="Yes"></p-radioButton>
                  <label for="city1">Yes</label>
              </div>
          </div>
          <div class="col-12 md:col-4">
              <div class="field-radiobutton">
                  <p-radioButton (onClick)="postInBarDetails()" value="No" [(ngModel)]="valRadio" id="city2"  formControlName="No"></p-radioButton>
                  <label for="city2">No</label>
              </div>
          </div>
          <div class="col-12 md:col-4">
              <div class="field-radiobutton">
                  <p-radioButton (onClick)="postInBarDetails()" value="Other" [(ngModel)]="valRadio" id="city3"  formControlName="Other"></p-radioButton>
                  <label for="city3">Other</label>
              </div>
          </div>
          </div>
          <h5>Comment Section</h5>
          <textarea rows="5" cols="30" placeholder="Your Message" class="col-12 mr-7 mb-5" pInputTextarea formControlName="textarea"></textarea>
          <button (click)="postInBarDetails()" pButton pRipple label="Save" class="mr-2 mb-2"></button>
      </form>
   </div>
   `
})
export class InBarComponent implements OnInit{
    ngOnInit(): void {
        this.formValue=this.formbuilder.group({
			textarea : [''],
			Yes : [''],
			No : [''],
			Other: ['']
		})
    }
    formValue !: FormGroup ;
    valRadio: string = '';
    InBarModel:InBarModel=new InBarModel();
    constructor(private formbuilder:FormBuilder, private api:ApiService){}
    postInBarDetails(){
        this.InBarModel.InBarTextarea=this.formValue.value.textarea
        this.InBarModel.InBarCompliances=this.formValue.value.Yes
        this.InBarModel.InBarCompliances=this.formValue.value.No
        this.InBarModel.InBarCompliances=this.formValue.value.Other
        this.api.postComment(this.InBarModel)
        .subscribe(res=>{
            console.log(res);
            alert("Bar Added Successfully")
        },
        err=>{
            alert("something went wrong")
        })
      }
      cancel:boolean=true
	  onCancel(){
		this.cancel=false
	  }
}
