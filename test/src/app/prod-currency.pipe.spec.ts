import { ProdCurrencyPipe } from './prod-currency.pipe';

describe('ProdCurrencyPipe', () => {
  const pipe = new ProdCurrencyPipe();
  it('create an instance', () => {
   
    expect(pipe).toBeTruthy();
    
    
  });



it('transforms "178.4999" to "$178.50"', () => {
  expect(pipe.transform('178.4999')).toBe('$178.50');
});

});
