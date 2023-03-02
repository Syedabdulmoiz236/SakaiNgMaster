import { Component, OnInit } from '@angular/core';
import{FormBuilder , FormGroup }from '@angular/forms'
import { ApiService } from 'src/app/demo/api/api.service';
import { RkEtlModel } from './resource-knowledge.model';
@Component({
    selector: 'app-etl',
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
	<h4>ETL :</h4>
	<h5>Compliance</h5>
	<div class="grid formgrid">
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postEtlDetails()"  value="Yes" [(ngModel)]="valRadio" id="city1" formControlName="Yes"></p-radioButton>
				<label for="city1">Yes</label>
			</div>
		</div>
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postEtlDetails()"  value="No" [(ngModel)]="valRadio" id="city2" formControlName="No"></p-radioButton>
				<label for="city2">No</label>
			</div>
		</div>
    <div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postEtlDetails()"  value="Other" [(ngModel)]="valRadio" id="city3" formControlName="Other"></p-radioButton>
				<label for="city3">Other</label>
			</div>
		</div>
	</div>
	
	<h5>Comment Section</h5>
	<textarea rows="5" cols="30" placeholder="Your Message" class="col-12 mr-7 mb-5" pInputTextarea formControlName="textarea"></textarea>
	<button (click)="postEtlDetails()" pButton pRipple label="Save" class="mr-2 mb-2"></button>
</form>
</div>
  `
})
export class EtlComponent implements OnInit{
	valRadio: string = '';
	formValue !: FormGroup ;
	RkEtlModel:RkEtlModel=new RkEtlModel();
	constructor(private formbuilder:FormBuilder , private api:ApiService){ }
  ngOnInit(): void {
	this.formValue=this.formbuilder.group({
		textarea : [''],
		Yes : [''],
		No : [''],
		Other: ['']
	})
  }
  
postEtlDetails(){
	this.RkEtlModel.Etltextarea=this.formValue.value.textarea
	this.RkEtlModel.EtlCompliances=this.formValue.value.Yes
	this.RkEtlModel.EtlCompliances=this.formValue.value.No
	this.RkEtlModel.EtlCompliances=this.formValue.value.Other
	this.api.postComment(this.RkEtlModel)
	.subscribe(res=>{
		console.log(res);
		alert("Etl Added Successfully")
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
