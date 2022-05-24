import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-guest-session-wait',
  templateUrl: './guest-session-wait.page.html',
  styleUrls: ['./guest-session-wait.page.scss'],
})
export class GuestSessionWaitPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  /**
  * handleWaitBtnClick funcation
  * @desc
  */
  handleWaitBtnClick(){
  }

}
