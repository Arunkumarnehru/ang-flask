import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlaskapiService } from '../flaskapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(private flaskApiService: FlaskapiService) { }
  public posts!: string[];
  public postsSubscription!: Subscription;

  public getPosts() {
    this.postsSubscription = this.flaskApiService.getPosts().subscribe((p : any) => {
      this.posts = p["data"];
      console.log(this.posts)
    })
  }

  ngOnInit() {
    this.getPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
