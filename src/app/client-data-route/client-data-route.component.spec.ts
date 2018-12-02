import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDataRouteComponent } from './client-data-route.component';

describe('ClientDataRouteComponent', () => {
  let component: ClientDataRouteComponent;
  let fixture: ComponentFixture<ClientDataRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDataRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDataRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
