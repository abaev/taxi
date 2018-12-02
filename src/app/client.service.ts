import { Injectable } from '@angular/core';
import { ConfigService } from './config.service'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
	routeSelect: string;
	dataRoute: {
		cities: {
			city: string;
			from: string;
			to: string;
		},
		bothWays: boolean;
	};

  constructor(private config: ConfigService) { 
  	this.routeSelect = 'Трансфер';
		this.dataRoute = {
			cities: {
				city: this.config.cities[0],
				from: this.config.cities[0],
				to: this.config.cities[0]
			},
			bothWays: false
		};
  }
}
