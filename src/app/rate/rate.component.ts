import { Component, OnInit } from '@angular/core';
import { GetRatesService } from '../get-rates.service';
import { ClientService } from '../client.service';
import { Rate } from './rate';


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

	cityRates: Rate[] = [];

  constructor(private getRates: GetRatesService,
  	private client: ClientService) { }

  ngOnInit() {
  	this.getRates.get().subscribe(data => {
  		
  		let city = this.client.dataRoute.cities.city;

  		data[city].elements.forEach((item) => {
  			this.cityRates.push({
  				title: item['Тариф'],
			  	supplyCost: item['Подача автомобиля (руб.)'],
			  	waitingCost: item['Ожидание (руб.)'],
			  	kmCost: item['Стоимость км (руб.)'],
			  	reverseWayDiscount: item['Скидка на обратную поездку (%)'],
			  	reverseWayWaitingCost: item['Ожидание при обратной поездке (руб./час)'],
			  	maxPassengers: item['Количество пассажиров']
  			});
  		});

  		console.log(this.cityRates);
  		console.log(city);
  	});
  }

}

// rates: [{
//   	title: string;
//   	supplyCost: number;
//   	waitingCost: number;
//   	kmCost: number;
//   	reverseWayDiscount: number;
//   	reverseWayWaitingCost: number;
//   	maxPassengers: number;
//   }];