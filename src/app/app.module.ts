import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityService } from './Services/City-Service';
import { CustomerService } from './Services/Customer-Service';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { ChangeChar } from './pipes/changeToCapital';
import { SearchPipe } from './pipes/SearchByPipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponentComponent,
    ChangeChar,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [CityService, CustomerService, ChangeChar, SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
