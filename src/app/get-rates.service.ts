import { Injectable, Inject } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRatesService {

	get() {
		return from(new Promise(resolve => {
			this.tabletop.fetch((data) => {
				resolve(data);
				});
			})
		);
	}

  constructor(@Inject('Tabletop') private tabletop: any) { }
}
