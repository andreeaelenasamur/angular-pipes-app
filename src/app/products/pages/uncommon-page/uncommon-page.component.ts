import { Component } from '@angular/core';
import { Observable, interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Andreea'
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void{
    this.name = 'Fernando';
    this.gender = 'male';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Andreea',
    age: 23,
    address: 'Sevilla, España'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap (value => console.log('tap:',value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}
