import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,

} from "@angular/forms"; 

@Component({
  selector: 'app-join-select-team',
  templateUrl: './join-select-team.page.html',
  styleUrls: ['./join-select-team.page.scss'],
})
export class JoinSelectTeamPage implements OnInit {

  joinSelectTeamForm: FormGroup;

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
    this.joinSelectTeamForm =this.formBuilder.group({
      sessionTeam: new FormControl('', [Validators.required])
    });
  }


  /**
  * handleReadyBtnClick funcation
  * @desc Move to Session Wait Page
  */
  onFormSubmit(joinSelectTeamForm){
    console.log('joinSelectTeamForm:', joinSelectTeamForm);
    this.router.navigate(['/guest-home/guest-session-wait']);
  }

}
