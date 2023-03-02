import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup}from '@angular/forms'
import { RkOpsModel } from './resource-knowledge.model';

@Component({
    selector:'app-opsdba',
	styles:[`
	:host ::ng-deep .Cross{
		margin-left: 95%}
	`],
    template: `
<div class="card" *ngIf="cancel">
<div class="Cross">
  <button (click)="onCancel()" pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text mr-2 mb-2"></button>
	</div>
	<form [formGroup]="formValue">	
		<h4>OpsDBA :</h4>
		<h5>Compliance</h5>
		<div class="grid formgrid">
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postOpsDetails()"  value="Yes" [(ngModel)]="valRadio" id="city1" formControlName="Yes"></p-radioButton>
				<label for="city1">Yes</label>
			</div>
		</div>
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postOpsDetails()"  value="No" [(ngModel)]="valRadio" id="city2" formControlName="No"></p-radioButton>
				<label for="city2">No</label>
			</div>
		</div>
    <div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postOpsDetails()"  value="Other" [(ngModel)]="valRadio" id="city3" formControlName="Other" ></p-radioButton>
				<label for="city3">Other</label>
			</div>
		</div>
	</div>
	
	<h5>Comment Section</h5>
	<textarea rows="5" cols="30" placeholder="Your Message" class="col-12 mr-7 mb-5" pInputTextarea formControlName="textarea"></textarea>
	<button  (click)="postOpsDetails()" pButton pRipple label="Save" class="mr-2 mb-2"></button>
	
</form>
</div>
  `
})
export class OpsdbaComponent implements OnInit{
	valRadio: string = '';
	formValue ! : FormGroup;
	RkOpsModel:RkOpsModel=new RkOpsModel();
	constructor(private formbuilder:FormBuilder, private api:ApiService){}	
  ngOnInit(): void {
	this.formValue=this.formbuilder.group({
		textarea : [''],
		Yes : [''],
		No :[''],
		Other :[''],
		
	})
  }
postOpsDetails(){
	this.RkOpsModel.Opstextarea=this.formValue.value.textarea
	this.RkOpsModel.OpsCompliances=this.formValue.value.Yes
	this.RkOpsModel.OpsCompliances=this.formValue.value.No
	this.RkOpsModel.OpsCompliances=this.formValue.value.Other

	this.api.postComment(this.RkOpsModel)
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