import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/demo/api/api.service';
import { InovationAutomationModel } from './inovation-automation.model';

@Component({
  selector: 'app-inovation-automation',
  templateUrl: './inovation-automation.component.html',
  styleUrls: ['./inovation-automation.component.scss']
})
export class InovationAutomationComponent implements OnInit {
  formValue !: FormGroup ;
	InovationAutomationModel:InovationAutomationModel=new InovationAutomationModel();
	constructor(private formbuilder:FormBuilder , private api:ApiService){ }
    valRadio: string = '';
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
			textarea : [''],
			Yes : [''],
			No : [''],
			Other: ['']
		})
  }
  postInovationDetails(){
		this.InovationAutomationModel.InovationTextarea=this.formValue.value.textarea
		this.InovationAutomationModel.InvoationCompliances=this.formValue.value.Yes
		this.InovationAutomationModel.InvoationCompliances=this.formValue.value.No
		this.InovationAutomationModel.InvoationCompliances=this.formValue.value.Other
		this.api.postComment(this.InovationAutomationModel)
		.subscribe(res=>{
			console.log(res);
			alert("Inovation Automation Added Successfully")
		},
		err=>{
			alert("something went wrong")
		})
	}

}
