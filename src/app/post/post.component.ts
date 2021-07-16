import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlaskapiService } from '../flaskapi.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private flaskApiService: FlaskapiService, private route: ActivatedRoute, private router: Router) { }

  public currentId: any = this.route.snapshot.paramMap.get("id");
  public postSubscription!: Subscription;
  public editSubscription!: Subscription;
  public post!: Post;
  public editMode: boolean = false;
  public image: any;
  public busy!: boolean;

  public editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('',  Validators.required),
    oldcover: new FormControl('',  Validators.required),  
    id: new FormControl('', Validators.required),
    covername: new FormControl('', Validators.required)
  });



  public handleInput($event: Event){
    //getting the image or files
    const target = ($event.target as HTMLInputElement);
    this.image = target.files;
    console.log(this.image);
  }


  public enableEdit(){
    this.editMode = !this.editMode;
  }


  public editPost(formData: Post){
    this.busy = true;
    this.editSubscription = this.flaskApiService.editPost(formData, this.image).subscribe(res => {
      this.busy = false;
      console.log(res)
    })
  }

  public getPostById(){
    this.postSubscription = this.flaskApiService.getPost(this.currentId).subscribe( (res:any) => {
      this.post = res["data"];
      console.log("post");
      console.log(this.post)
      this.editForm.setValue({
        title: res["data"][1],
        content: res["data"][2],
        id: res["data"][0],
        oldcover: res["data"][3],
        covername: res["data"][4]
      })
    })
  }

  public deletePost(postId: any){
    this.flaskApiService.deletePost(postId).subscribe(res => {
      console.log(res);
      this.router.navigate(["/"]);
    })
  }



  ngOnInit() {
    this.getPostById();
  }
  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
