import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  cities: string[] = [
  	'Москва',
  	'Санкт-Петербург',
  	'Новосибирск'
  ];

  serverUrl: string = 'https://taxi-form.herokuapp.com/';

}
