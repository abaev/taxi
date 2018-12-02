import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaxiRoutingModule } from './taxi-routing.module';
import { IntroComponent } from './intro/intro.component';
import { ClientDataRouteComponent } from './client-data-route/client-data-route.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { ConfigService } from './config.service'
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './client.service';
import { RateComponent } from './rate/rate.component';
import { GetRatesService } from './get-rates.service';
import { PrevNextButtonsComponent } from './prev-next-buttons/prev-next-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ClientDataRouteComponent,
    ClientDataComponent,
    RateComponent,
    PrevNextButtonsComponent
  ],
  imports: [
    BrowserModule,
    TaxiRoutingModule,
    ReactiveFormsModule
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
  	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
