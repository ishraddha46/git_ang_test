import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodCurrency',
  pure: true
})
export class ProdCurrencyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    
    return "$" + parseFloat(value).toFixed(2);
  }

}
