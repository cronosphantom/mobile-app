import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { Storage } from '@capacitor/storage';


import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,

} from "@angular/forms"; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;


  passwordType: any = "password";
  showPassword: any = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private user: UserService,
    public toaster: ToastController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  /**
  * initForm Function
  * @desc Init Form Fields/Controll
  */
  initForm(){
    this.loginForm =this.formBuilder.group({
      userName: new FormControl('', [ Validators.required]),
      password: new FormControl('', [ Validators.required,])
    });
  }

  onPasswordToggle() {
    this.showPassword = !this.showPassword;
    if (this.passwordType === "password") {
      this.passwordType = "text";
    } else {
      this.passwordType = "password";
    }
  }

  login(form) {
    this.user.signIn(form.value).subscribe(
      async (res: any) => {
      console.log(res);

        if (res.data.userLogin.status =='success') {
          const loginInfo = JSON.stringify(res.data.userLogin);
          Storage.set({ key: "userdetails", value: loginInfo }).then(() => {
            this.user.isLoggedIn = true;
            this.user.userDetails = res.data.userLogin;
            this.user.hasNewMatches = res.data.userLogin.user.hasNewMatches;
            this.router.navigate(["/home"]);
          });
        }
        else {
          this.doLoginError()
        }

      },
      async (error: any) => {
        console.log(error)
       this.doLoginError()
      }
    );
  }

 async doLoginError(){
  const toast = await this.toaster.create({
    message: "Invalid Username and Password",
    duration: 4000,
  });
  toast.present();
 }
}


