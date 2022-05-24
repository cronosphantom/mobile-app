import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { AlertController } from "@ionic/angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms"; 
import { PasswordValidation } from "src/app/config/password-verofication";
import { EMAIL_PATTERN, PASSWORD_PATTERN } from "src/app/config/constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  passwordType: any = "password";
  showPassword = false;
  checkAge = false;
  registerForm: FormGroup;
  emailExists1: boolean = false;
  userNameExists1:boolean=false;
  constructor(
    private router: Router,
    private user: UserService,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        
        userName: new FormControl("", [Validators.required]),
        email: new FormControl("", [
          Validators.required,
          Validators.pattern(EMAIL_PATTERN),
        ]),
        mobile: new FormControl("", [Validators.required]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
        confirm_password: new FormControl(""),
      
      },
      {
        validator: PasswordValidation.MatchPassword,
      }
    );
  }

  register(formData) {
    if (
      
      !this.registerForm.valid ||
      this.emailExists1 === true
    ) {
      return;
    }
   
   
      const body = {
        ...formData,
        email: formData.email.toLowerCase(),
      };
      delete body.confirm_password;
     
      this.user.register(body).subscribe((res: any) => {
        this.user.userDetails.user = res
        this.router.navigate(['/login'])
        
      });
    
  }

  
  emailExists(email) {
     
    this.user.emailExists(email).subscribe((res: any) => {
      
      this.emailExists1 = res.data.emailExists;
      if (this.emailExists1 == true) {
        //  const email=new FormControl("email")
        this.registerForm.controls["email"].setErrors({ duplicate: true });
      }
    });
  }
  userNameExists(email) {
     
    this.user.userNameExists(email).subscribe((res: any) => {
      
      this.userNameExists1 = res.data.userNameExists;
      if (this.userNameExists1 == true) {
        //  const email=new FormControl("email")
        this.registerForm.controls["userName"].setErrors({ duplicate: true });
      }
    });
  }
}
