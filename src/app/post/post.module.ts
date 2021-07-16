import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    PostRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class PostModule { }
