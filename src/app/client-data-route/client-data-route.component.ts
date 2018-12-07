import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfigService } from '../config.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-data-route',
  templateUrl: './client-data-route.component.html',
  styleUrls: ['./client-data-route.component.css']
})
export class ClientDataRouteComponent implements OnInit, OnDestroy {

  constructor(private config: ConfigService,
  	public client: ClientService,
  	private fb: FormBuilder) { }

  citiesList: string[] = this.config.cities;
  dataRoute: any = this.client.dataRoute;

  clientDataRouteForm = this.fb.group({
  	routeCities: this.fb.group({
  		city: [this.dataRoute.cities.city],
	  	from: [this.dataRoute.cities.from],
	  	to: [this.dataRoute.cities.to]
  	}),
  	bothWays: [this.dataRoute.bothWays]
  });

  ngOnInit() {
  	
  }

  ngOnDestroy() {
  	// Сохранение данных о клиенте в сервисе
  	this.client.dataRoute.cities = this.clientDataRouteForm.value.routeCities;
  	this.client.dataRoute.bothWays = this.clientDataRouteForm.value.bothWays
  }

}
