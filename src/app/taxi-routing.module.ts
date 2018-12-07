import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { IntroComponent }   from './intro/intro.component';
import { RateComponent }   from './rate/rate.component';
import { SupplyComponent }   from './supply/supply.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component'

const taxiRoutes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'rate', component: RateComponent },
  { path: 'supply', component: SupplyComponent },
  { path: 'passenger-data', component: PassengerDataComponent },
 /* { path: 'heroes',        component: HeroListComponent },*/
  { path: '',   redirectTo: '/intro', pathMatch: 'full' }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( taxiRoutes, { useHash: true }
      /*, { enableTracing: true }*/ // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TaxiRoutingModule { }
