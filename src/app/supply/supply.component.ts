import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router }  from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder,
  	private router: Router,
  	public client: ClientService) { }

  supplyForm = this.fb.group({
  	date: [''],
  	timeFromPicker: [''],
  	time: [''],
  	address: [''],
  	destinationAddress: this.fb.array([
	    this.fb.control('')
	  ])
  });

  get destinationAddress() {
	  return this.supplyForm.get('destinationAddress') as FormArray;
	}

	addDestinationAddress() {
		if(this.destinationAddress.length < 5) {
		  this.destinationAddress.push(this.fb.control(''));
		}
	}

  ngOnInit() {
  	if(!this.client.rate) {
  		// Убедиться, что пользователь ввел все необходимые данные,
  		// если нет - переход на '/'
  		this.router.navigateByUrl('/');
  	}

  	this.supplyForm.controls.timeFromPicker.valueChanges.subscribe(e => { 
  		let hour, minute;
  		if(e)	{
  			hour = e.hour < 10 ? `0${e.hour}` : `${e.hour}`;
  			minute = e.minute < 10 ? `0${e.minute}` : `${e.minute}`;
  			this.supplyForm.controls.time.setValue(`${hour}:${minute}`);
  		}
  	});
  }

  ngOnDestroy() {
  	delete this.supplyForm.value.timeFromPicker;
  	this.client.supply = this.supplyForm.value;

  	// Чтобы нормально отображалось в тексте письма
  	if(typeof this.supplyForm.value.date == 'string') {
  		this.client.supply.date = { year: '', month: '', day: '' };
  	}

  }

}
