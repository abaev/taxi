import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prev-next-buttons',
  templateUrl: './prev-next-buttons.component.html',
  styleUrls: ['./prev-next-buttons.component.css']
})
export class PrevNextButtonsComponent implements OnInit {

	@Input() previous: string;
	@Input() next: string;

  constructor() { }

  ngOnInit() {
  }

}
