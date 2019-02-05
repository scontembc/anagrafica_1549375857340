import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ContactListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ContactListComponent
  ]
})
export class ContactListModule { }
