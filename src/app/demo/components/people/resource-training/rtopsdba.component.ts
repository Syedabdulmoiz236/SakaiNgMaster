import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "src/app/demo/api/api.service";
import { RtOpsModel } from "./resource-training.model";
@Component({
    selector: 'app-rtopsdba',
    styles:[`
	:host ::ng-deep .p-button-rounded{
		margin-left: 95%}
	`],
    template: `
    <div class="card" *ngIf="cancel">
    <button (click)="onCancel()" pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text mr-2 mb-2"></button>
  
    <form [formGroup]="formValue">  
    <h4>Ops DBA :</h4>
    <h5>Compliance</h5>
    <div class="grid formgrid">
      <div class="col-12 md:col-4">
        <div class="field-radiobutton">
          <p-radioButton (onClick)="postRtOpsDetails()"  value="Yes" [(ngModel)]="valRadio" id="city1" formControlName="Yes"></p-radioButton>
          <label for="city1">Yes</label>
        </div>
      </div>
      <div class="col-12 md:col-4">
        <div class="field-radiobutton">
          <p-radioButton (onClick)="postRtOpsDetails()"  value="No" [(ngModel)]="valRadio"id="city2" formControlName="No"></p-radioButton>
          <label for="city2">No</label>
        </div>
      </div>
      <div class="col-12 md:col-4">
        <div class="field-radiobutton">
          <p-radioButton (onClick)="postRtOpsDetails()"  value="Other" [(ngModel)]="valRadio" id="city3" formControlName="Other"></p-radioButton>
          <label for="city3">Other</label>
        </div>
      </div>
    </div>
    
    <h5>Comment Section</h5>
    <textarea rows="5" cols="30" placeholder="Your Message" class="col-12 mr-7 mb-5" pInputTextarea formControlName="textarea"></textarea>
    <button (click)="postRtOpsDetails()" pButton pRipple label="Save" class="mr-2 mb-2"></button>
  </form>
  </div>
    `
})
export class RtOpsdbaComponent implements OnInit{
  valRadio: string = '';
  formValue ! : FormGroup;
  RtOpsModel:RtOpsModel=new RtOpsModel()
  constructor(private formbuilder:FormBuilder, private api:ApiService){}
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      textarea : [''],
      Yes : [''],
      No :[''],
      Other :[''], 
    }) 
  }
  postRtOpsDetails(){
    this.RtOpsModel.RtOpsTextarea=this.formValue.value.textarea
    this.RtOpsModel.RtOpsCompliances=this.formValue.value.Yes
    this.RtOpsModel.RtOpsCompliances=this.formValue.value.No
    this.RtOpsModel.RtOpsCompliances=this.formValue.value.Other
  
    this.api.postComment(this.RtOpsModel)
    .subscribe(res=>{
      console.log(res);
      alert('Ops Added Succesfully')
    },
    err=>{
      alert('Something went wrong')
    })
  }
  cancel:boolean=true
  onCancel(){
  this.cancel=false
  }
}