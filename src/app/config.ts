class Config {

	cities: string[];

  spreadsheetKey: string;

  constructor() {
  	this.cities = [
	  	'Москва',
	  	'Санкт-Петербург',
	  	'Новосибирск'
	  ];

	  this.spreadsheetKey = 'https://docs.google.com/spreadsheets/d/11eajrBQxBVami8RHU42qRWexFNEckaa9tKirgTHCoeE/edit#gid=379146327';
  }
}

export new Config();