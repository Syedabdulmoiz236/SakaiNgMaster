import { Component, OnInit } from "@angular/core";
import { FormBuilder,FormGroup } from "@angular/forms";
import { ApiService } from "src/app/demo/api/api.service";
import { RrResignationModel } from "./rotation-retention.model";
@Component({
    selector:'app-rrresignation',
	styles:[`
	:host ::ng-deep .p-button-rounded{
		margin-left: 95%}
	`],
    template: `
  <div class="card" *ngIf="cancel">
  <button (click)="onCancel()" pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text mr-2 mb-2"></button>
  
  <form [formGroup]="formValue">
	<h4>Resignation :</h4>
	<h5>Compliance</h5>
	<div class="grid formgrid">
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postResignationDetails()"  value="Yes" [(ngModel)]="valRadio" id="city1" formControlName="Yes"></p-radioButton>
				<label for="city1">Yes</label>
			</div>
		</div>
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postResignationDetails()"  value="No" [(ngModel)]="valRadio"id="city2" formControlName="No"></p-radioButton>
				<label for="city2">No</label>
			</div>
		</div>
    <div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postResignationDetails()"  value="Other" [(ngModel)]="valRadio" id="city3" formControlName="Other"></p-radioButton>
				<label for="city3">Other</label>
			</div>
		</div>
	</div>
	
	<h5>Comment Section</h5>
	<textarea rows="5" cols="30" placeholder="Your Message" class="col-12 mr-7 mb-5" pInputTextarea formControlName="textarea"></textarea>
	<button (click)="postResignationDetails()"  pButton pRipple label="Save" class="mr-2 mb-2"></button>
</form>
</div>
  `
})
export class RrResignationComponent implements OnInit{
	valRadio: string = ''; 
    formValue !: FormGroup ;
    RrResignationModel:RrResignationModel=new RrResignationModel()
    constructor(private formbuilder:FormBuilder , private api:ApiService){ }

	ngOnInit(): void {
		this.formValue=this.formbuilder.group({
			textarea : [''],
			Yes : [''],
			No : [''],
			Other: ['']
		})
	}
	postResignationDetails(){
		this.RrResignationModel.RrResTextarea=this.formValue.value.textarea
		this.RrResignationModel.RrResCompliances=this.formValue.value.Yes
		this.RrResignationModel.RrResCompliances=this.formValue.value.No
		this.RrResignationModel.RrResCompliances=this.formValue.value.Other
		this.api.postComment(this.RrResignationModel)
		.subscribe(res=>{
			console.log(res);
			alert("Resignation Added Successfully")
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