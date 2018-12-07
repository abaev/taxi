import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router }  from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from '../client.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-passenger-data',
  templateUrl: './passenger-data.component.html',
  styleUrls: ['./passenger-data.component.css']
})
export class PassengerDataComponent implements OnInit {

  constructor(private fb: FormBuilder,
  	private router: Router,
  	private http: HttpClient,
  	public client: ClientService,
  	private config: ConfigService,
  	private modalService: NgbModal) { }

  passengersNumbers: number[] = [];

  passengerDataForm = this.fb.group({
  	passengersQuantity: ['1'],
  	name: [''],
  	phone: [''],
  	email: [''],
  	remark: ['']
  });

  // emailTo = this.fb.control('');

  ngOnInit() {
  	if(!this.client.rate || !this.client.supply) {
  		// Убедиться, что пользователь ввел все необходимые данные,
  		// если нет - переход на '/'
  		this.router.navigateByUrl('/');
  		return;
  	}

  	for(let i = 1; i <= this.client.rate.maxPassengers; i++) {
  		this.passengersNumbers.push(i);
  	}
  }

  onClick(email?: string): void {
  	this.client.passengerData = this.passengerDataForm.value;
  	// delete this.client.config;

  	this.http.post(this.config.serverUrl + 'email-send', 
  		{ 
  			client: this.client,
  			email: email
  		},
  		{ 
				withCredentials: false,
				responseType: 'text'
			})
  		.pipe(catchError(this.handleError)).subscribe(res => {}, err => {});
  }


  private handleError(error: HttpErrorResponse) {
  	let message: string | number;
	  
	  if (error.error instanceof ErrorEvent) {
	    // A client-side or network error occurred. Handle it accordingly.
	    // message = 'An error occurred:'+ error.error.message
	    message = 'A client-side or network error occurred';
	  } else {
	    // The backend returned an unsuccessful response code.
	    // code =  error.status
      // body = error.error
	    message = error.status;
	  }
	  return throwError(message);
	};

	// После отладки удалить
	open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})/*.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })*/;
  }

}
