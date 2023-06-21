import { Injectable } from '@angular/core';
import { v4 as uuid  } from 'uuid';
import { Personaje } from '../interfaces/personajes.interface';
uuid();
@Injectable({
  providedIn: 'root'
})


export class DbzService {

  public personajes :Personaje [] = [{
    id: uuid(),
    name: 'krilin',
    power: 999,
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9999,
  }, {
    id: uuid(),
    name: 'Yamcha',
    power: 9999999999999,
  }];

  onAddPersonaje( personaje: Personaje ):void {

    const newPersonaje: Personaje = {id: uuid(), ...personaje};
    this.personajes.push( personaje );
  }

  //  onDeletePersonaje( index:number) {
    // this.personajes.splice( index, 1 );
   DeletePersonajeById( id:string) {
    this.personajes = this.personajes.filter( personaje => personaje.id !== id );
   }

}
