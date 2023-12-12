import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';


@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

public name: string = "Gonzalo";
public gender: "male" | "female" = "male";
public invitationMap = {
  "male": "invitarlo",
  "female":"invitarla"
}
 
 changeClient():void {
  this.name = "Camila";
  this.gender = "female"; 
 }


//i18plural
public clients: string[] = ["Laura","Joaquin", "Lautaro", "Juan", "Martin", "Camila", "Lujan"];
public clientsMap = {
  "=0": "no tenemos ningun cliente esperando.",
  "=1": "tenemos un cliente esperando.", 
  "=2": "tenemos 2 personas esperando.",
  "other": "tenemos # clientes esperando.", 
}

deleteClient():void {
  this.clients.shift();
}

//keyvalue
public person = {
  name: "Gonzalo",
  age: 24,
  address: "Buenos Aires, Argentina",
  }

//async pipe

public myObservableTimer : Observable<number> = interval(2000).pipe(
  tap( value => console.log("tap:", value ) ),
);

public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve("Tenemos data en la promesa." );
    console.log("Tenemos data en la promesa." );
  this.person.name = "Otro nombre"
  }, 3500);
})

}

