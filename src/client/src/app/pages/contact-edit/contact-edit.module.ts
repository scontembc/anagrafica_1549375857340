import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactEditComponent } from './contact-edit.component';
import { ContactEditRoutingModule } from './contact-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ContactEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ContactEditComponent
  ]
})
export class ContactEditModule { }
