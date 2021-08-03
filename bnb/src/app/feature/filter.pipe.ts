import { Pipe, PipeTransform } from '@angular/core';
import Listing from '../models/Listing';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Listing['title']>, input: any): any {

    if(input){
       return value.filter(val => val.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    }else{
      return value;

    }
  }

}
