import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BurkbankComponent } from './burkbank/burkbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { WashingtonComponent } from './washington/washington.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    BurkbankComponent,
    SeattleComponent,
    DallasComponent,
    ChicagoComponent,
    SanjoseComponent,
    WashingtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
