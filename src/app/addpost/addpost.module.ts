import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostRoutingModule } from './addpost-routing.module';
import { AddpostComponent } from './addpost.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddpostComponent,
  ],
  imports: [
    AddpostRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AddpostComponent]
})
export class AddpostModule { }
