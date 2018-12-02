import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { IntroComponent }   from './intro/intro.component';
import { RateComponent }   from './rate/rate.component';

const taxiRoutes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'rate', component: RateComponent },
 /* { path: 'heroes',        component: HeroListComponent },*/
  { path: '',   redirectTo: '/intro', pathMatch: 'full' }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      taxiRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TaxiRoutingModule { }
