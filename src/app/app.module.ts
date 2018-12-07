import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaxiRoutingModule } from './taxi-routing.module';
import { IntroComponent } from './intro/intro.component';
import { ClientDataRouteComponent } from './client-data-route/client-data-route.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { ConfigService } from './config.service'
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ClientService } from './client.service';
import { RateComponent } from './rate/rate.component';
import { GetRatesService } from './get-rates.service';
import { PrevNextButtonsComponent } from './prev-next-buttons/prev-next-buttons.component';
import { SupplyComponent } from './supply/supply.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';


registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ClientDataRouteComponent,
    ClientDataComponent,
    RateComponent,
    PrevNextButtonsComponent,
    SupplyComponent,
    PassengerDataComponent
  ],
  imports: [
    BrowserModule,
    TaxiRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [
  	ConfigService,
  	ClientService,
  	GetRatesService,
  	{ provide: 'Tabletop', useValue: window['Tabletop']({
	  		key: 'https://docs.google.com/spreadsheets/d/11eajrBQxBVami8RHU42qRWexFNEckaa9tKirgTHCoeE/edit#gid=379146327',
	  		wait: true,
	  		parseNumbers: true
	  	}) 
  	},
  	{ provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
