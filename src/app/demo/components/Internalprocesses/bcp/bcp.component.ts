import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/demo/api/api.service';
import { BcpModel } from './bcp.model';

@Component({
  selector: 'app-bcp',
  templateUrl: './bcp.component.html',
  styleUrls: ['./bcp.component.scss']
})
export class BcpComponent implements OnInit {
  formValue !: FormGroup ;
	BcpModel:BcpModel=new BcpModel();
  valRadio: string = '';
	constructor(private formbuilder:FormBuilder , private api:ApiService){ }
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
			textarea : [''],
			Yes : [''],
			No : [''],
			Other: ['']
		})
  }
  postBcpDetails(){
		this.BcpModel.BcpTextarea=this.formValue.value.textarea
		this.BcpModel.BcpCopmliances=this.formValue.value.Yes
		this.BcpModel.BcpCopmliances=this.formValue.value.No
		this.BcpModel.BcpCopmliances=this.formValue.value.Other
		this.api.postComment(this.BcpModel)
		.subscribe(res=>{
			console.log(res);
			alert("BCP Added Successfully")
		},
		err=>{
			alert("something went wrong")
		})
	}

}
