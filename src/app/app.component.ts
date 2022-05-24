import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private user: UserService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await this.user.UserData();
      window.addEventListener('initComplete', (ans) => {
        console.log(this.user.userDetails)
        if (this.user.isLoggedIn === false) {
          console.log("GOING HOME")
          this.router.navigate(['login']);
        }
        else {
          this.router.navigate(["host"]);
        }
      });
    });
  }
}
