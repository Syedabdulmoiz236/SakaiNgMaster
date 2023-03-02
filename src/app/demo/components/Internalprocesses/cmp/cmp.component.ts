import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/demo/api/api.service';
import { BcpModel } from '../bcp/bcp.model';
import { CmpModel } from './cmp.model';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit {
  formValue !: FormGroup ;
	CmpModel:CmpModel=new CmpModel();
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
  postCmpDetails(){
		this.CmpModel.CmpTextarea=this.formValue.value.textarea
		this.CmpModel.CmpCompliances=this.formValue.value.Yes
		this.CmpModel.CmpCompliances=this.formValue.value.No
		this.CmpModel.CmpCompliances=this.formValue.value.Other
		this.api.postComment(this.CmpModel)
		.subscribe(res=>{
			console.log(res);
			alert("CMP Added Successfully")
		},
		err=>{
			alert("something went wrong")
		})
	}

}
