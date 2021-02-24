import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from './evento';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(value: Evento[], filterBy: string): Evento[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filter) {
      return value
        .filter(value => value.title.toLocaleLowerCase().includes(filter) || value.description.toLocaleLowerCase().includes(filter));
    }
    return value;
  }


}
