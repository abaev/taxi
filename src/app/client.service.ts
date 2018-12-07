import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ConfigService } from './config.service';
import { Rate } from './rate';

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

	rate: Rate;

	supply: {
		date: string | any;
		time: string;
		address: string;
		destinationAddress: string[];
	};

	passengerData: {
		passengersQuantity: number;
		name: string;
		phone: string;
		email: string;
		remark: string;
	}

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
