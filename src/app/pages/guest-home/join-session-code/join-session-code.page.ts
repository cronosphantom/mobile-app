import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,

} from "@angular/forms"; 

@Component({
  selector: 'app-join-session-code',
  templateUrl: './join-session-code.page.html',
  styleUrls: ['./join-session-code.page.scss'],
})
export class JoinSessionCodePage implements OnInit {

  joinSessionCodeForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    
  }

  /**
  * initForm Function
  * @desc Init Form Fields/Controll
  */
  initForm(){
    this.joinSessionCodeForm =this.formBuilder.group({
      sessionCode: new FormControl('', [ Validators.required, Validators.minLength(4)])
    });
  }

  /**
  * handleContinueBtnClick funcation
  * @desc Move to Select Team Page
  */
  onFormSubmit(joinSessionCodeForm){
    console.log('joinSessionCodeForm:', joinSessionCodeForm);
    this.router.navigate(['/guest-home/join-select-team']);
  }

}
