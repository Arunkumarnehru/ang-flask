import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlaskapiService } from '../flaskapi.service';
import { User } from '../models/Post';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private flaskApiService: FlaskapiService, private router: Router) { }

  public busy!: boolean;
  public usererr!: boolean;
  public userForm = new FormGroup({
    username: new FormControl('', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8)]),
  });

  public userAdd(formData: User){
    this.usererr = false;
    this.flaskApiService.userAdd(formData).subscribe((res: any) => {
      console.log("That username already exists, Please choose a different one." === res["data"]);
      if ("That username already exists, Please choose a different one." === res["data"]) {
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

  get userfields() {
    return this.userForm.controls;
  }

  ngOnInit() {
  }

}
