import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlaskapiService } from '../flaskapi.service';
import { User } from '../models/Post';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private flaskApiService: FlaskapiService, private router: Router) { }


  public busy!: boolean;
  public usererr!: boolean;
  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8)]),
  });

  public Login(formData: User){
    this.usererr = false;
    this.flaskApiService.Login(formData).subscribe((res: any) => {
      console.log("username incorrect" === res["data"]);
      if ("username incorrect" === res["data"]) {
        this.usererr = true;
        this.busy = false;
        console.log('errorcheck')
      }
      else {
        this.busy = true;
        console.log(res["data"]);
        this.router.navigate(["/"]);
      }
    })
  }

  // get userfields() {
  //   return this.userForm.controls;
  // }
  ngOnInit() {
    
  }

}
