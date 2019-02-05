import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CompanyComponent
  ]
})
export class CompanyModule { }
