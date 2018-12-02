import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';
import { PrevNextButtonsComponent } from '../prev-next-buttons/prev-next-buttons.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

	isDataRouteActive: boolean = true;
  constructor(private client: ClientService) { }

  ngOnInit() {
  	
  }

  // routeSelect = this.fb.group({
  // 	select: ['Трансфер']
  // });

  // Какой-то баг FormBuilder, который криво создает routeSelect,
  // так что его свойства (select) не видны в шаблоне,
  // поэтому старый добрый FormGroup
  routeSelect = new FormGroup({
    select: new FormControl(this.client.routeSelect),
  });

  onClick(target: string): void {
  	if( (target === 'data' && this.isDataRouteActive)
  		|| target === 'route' && !this.isDataRouteActive) {
  			this.isDataRouteActive = !this.isDataRouteActive;
  	}
  }

}
