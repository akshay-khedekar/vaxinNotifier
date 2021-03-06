import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchApiService } from './fetch-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CheckAvailabilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [FetchApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
