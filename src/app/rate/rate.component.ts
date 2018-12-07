import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { GetRatesService } from '../get-rates.service';
import { ClientService } from '../client.service';
import { Rate } from '../rate';


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

	cityRates: Rate[] = [];

  constructor(private router: Router,
  	private getRates: GetRatesService,
  	public client: ClientService) { }

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

  		// Тариф по умолчанию
  		this.client.rate = this.cityRates[0];
  	});
  }

  onClick(rate: Rate): void {
  	this.client.rate = rate;
  	this.router.navigateByUrl('/supply');
  }

}
