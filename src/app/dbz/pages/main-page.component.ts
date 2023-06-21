import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageDbzComponent  {

constructor (private dbzService: DbzService) {}

 get personajes(): Personaje[] {

  return [...this.dbzService.personajes];
 }

onDeletePersonaje(id:string):void {
  this.dbzService.DeletePersonajeById(id)
}

onNewPersonaje (personaje:Personaje) {
  this.dbzService.onAddPersonaje(personaje)
}
}
