import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/demo/api/api.service';

import { ChangeReleaseModel } from './change-release.model';

@Component({
  selector: 'app-change-release',
  templateUrl: './change-release.component.html',
  styleUrls: ['./change-release.component.scss']
})
export class ChangeReleaseComponent implements OnInit {
  formValue !: FormGroup ;
	ChangeReleaseModel:ChangeReleaseModel=new ChangeReleaseModel();
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
  postChangeReleaseDetails(){
		this.ChangeReleaseModel.ChangeReleaseTextarea=this.formValue.value.textarea
		this.ChangeReleaseModel.ChangeReleaseCompliances=this.formValue.value.Yes
		this.ChangeReleaseModel.ChangeReleaseCompliances=this.formValue.value.No
		this.ChangeReleaseModel.ChangeReleaseCompliances=this.formValue.value.Other
		this.api.postComment(this.ChangeReleaseModel)
		.subscribe(res=>{
			console.log(res);
			alert("Change Release Added Successfully")
		},
		err=>{
			alert("something went wrong")
		})
  }

}
