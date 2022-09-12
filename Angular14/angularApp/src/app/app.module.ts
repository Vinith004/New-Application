import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShowProComponent } from './product/show-pro/show-pro.component';
import { AddEditProComponent } from './product/add-edit-pro/add-edit-pro.component'
import { SharedService } from './shared.service';
import{HttpClientModule} from '@angular/common/http'
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShowProComponent,
    AddEditProComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,                      
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
