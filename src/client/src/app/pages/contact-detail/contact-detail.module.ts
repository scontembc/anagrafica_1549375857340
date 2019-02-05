import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactDetailRoutingModule } from './contact-detail-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ContactDetailRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ContactDetailComponent
  ]
})
export class ContactDetailModule { }
