import { TaxiRoutingModule } from './taxi-routing.module';

describe('TaxiRoutingModule', () => {
  let taxiRoutingModule: TaxiRoutingModule;

  beforeEach(() => {
    taxiRoutingModule = new TaxiRoutingModule();
  });

  it('should create an instance', () => {
    expect(taxiRoutingModule).toBeTruthy();
  });
});
