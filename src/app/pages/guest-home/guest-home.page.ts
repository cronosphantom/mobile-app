import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.page.html',
  styleUrls: ['./guest-home.page.scss'],
})
export class GuestHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  /**
  * handleGustPageBtnClick funcation
  * @desc Move to other Page
  * @param pathName:string
  * @default '/gust-home'
  */
  handleGustPageBtnClick(pathName:string = '/guest-home'){
    this.router.navigate([pathName]);
  }


  /**
  * handleJoinEventBtnClick funcation
  * @desc Goto to Join Event page
  */
  handleJoinEventBtnClick(){
    this.router.navigate(['/guest-home/join-session-code']);
  }

  /**
  * handleCreateAccountBtnClick funcation
  * @desc Goto to Create Account page
  */
  handleCreateAccountBtnClick(){
    this.router.navigate(['/register']);
  }

  /**
  * handleInviteBtnClick funcation
  * @desc Goto to Invite Others page
  */
  handleInviteBtnClick(){
    // this.router.navigate(['/invite-user']);
  }

  /**
  * handleLoginBtnClick funcation
  * @desc Goto to Login page
  */
  handleLoginBtnClick(){
    this.router.navigate(['/login']);
  }



}
