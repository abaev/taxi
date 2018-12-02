import { Injectable } from '@angular/core';
import { Rates } from './rates'

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

  spreadsheetKey: string = 'https://docs.google.com/spreadsheets/d/11eajrBQxBVami8RHU42qRWexFNEckaa9tKirgTHCoeE/edit#gid=379146327';

}
