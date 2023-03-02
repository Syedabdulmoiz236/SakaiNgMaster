import {  RkBarModel } from './resource-knowledge.model';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup} from '@angular/forms'
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
    selector: 'app-bar',
	styles:[`
	:host ::ng-deep .p-button-rounded{
		margin-left: 95%}
	`],
	
    providers: [ConfirmationService, MessageService],
    template: `
	
  <div class="card" *ngIf="cancel">

  <button (click)="onCancel()" pButton pRipple type="button" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text mr-2 mb-2"></button>

  <form [formGroup]="formValue"> 
		<h4>BAR :</h4>
		<h5>Compliance</h5>
		<div class="grid formgrid">
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postBarDetails()"  value="Yes" [(ngModel)]="valRadio" id="city1" formControlName="Yes"></p-radioButton>
				<label for="city1">Yes</label>
			</div>
		</div>
		<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postBarDetails()" value="No" [(ngModel)]="valRadio" id="city2"  formControlName="No"></p-radioButton>
				<label for="city2">No</label>
			</div>
		</div>
    	<div class="col-12 md:col-4">
			<div class="field-radiobutton">
				<p-radioButton (onClick)="postBarDetails()"  value="Other" [(ngModel)]="valRadio" id="city3"  formControlName="Other"></p-radioButton>
				<label for="city3">Other</label>
			</div>
		</div>
		</div>
		<h5>Comment Section</h5>
		<textarea rows="5" cols="30" placeholder="Your Message" class="col-12 mr-7 mb-5" pInputTextarea formControlName="textarea"></textarea>
		<div class="Save"> 
		<button (click)="postBarDetails()"  pButton pRipple label="Save" class=" mr-2 mb-2"></button>
		<p-toast></p-toast>
            
            <p-confirmPopup key="confirm2"></p-confirmPopup>
		</div>
	</form>
</div>
`
})
export class BarComponent implements OnInit{
	formValue !: FormGroup ;
	RkBarModel:RkBarModel=new RkBarModel();

	
	constructor(private formbuilder:FormBuilder , private api:ApiService, private confirmationService: ConfirmationService, private messageService: MessageService){ }
	valRadio: string = '';
  ngOnInit(): void {
	this.formValue=this.formbuilder.group({
		textarea : [''],
		Yes : [''],
		No : [''],
		Other: ['']
	})
	  
  }
  cancel:boolean=true
  onCancel(){
	this.cancel=false
  }

  postBarDetails(){
	this.RkBarModel.Bartextarea=this.formValue.value.textarea
	this.RkBarModel.BarCompliances=this.formValue.value.Yes
	this.RkBarModel.BarCompliances=this.formValue.value.No
	this.RkBarModel.BarCompliances=this.formValue.value.Other
	this.api.postComment(this.RkBarModel)
	.subscribe(res=>{
		console.log(res);
		alert("Bar Added Successfully")
	},
	err=>{
		alert("something went wrong")
	})
  }
  confirm2(event: Event) {

	this.confirmationService.confirm({
		key: 'confirm2',
		target: event.target || new EventTarget,
		message: 'Are you sure that you want to proceed?',
		icon: 'pi pi-exclamation-triangle',
		accept: () => {
			this.RkBarModel
			this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
		},
		reject: () => {
			this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
		}
	});
}


}

