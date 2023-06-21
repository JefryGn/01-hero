
import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';


@Component({
  selector: 'add-pj-dbz',
  templateUrl: './add-pj-dbz.component.html',
  styleUrls: ['./add-pj-dbz.component.css']
})
export class AddPjDbzComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name: '',
    power: 0,
  };

emitPersonaje():void {

console.log(this.personaje);
if (this.personaje.name.length === 0) return;

this.onNewPersonaje.emit(this.personaje);

this.personaje = { name: '', power: 0 };

}


}
