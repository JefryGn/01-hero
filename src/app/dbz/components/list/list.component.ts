import { Input } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

import { Personaje } from '../../interfaces/personajes.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  @Input()
  public personajeList: Personaje[] =[{

    name:'Trunks',
    power: 4500,

 }]


  onDelete(id?: string): void {
  // onDeletePersonaje(index: number): void {
  //   console.log(index)}
   if(!id) return;
  // console.log(index)
  this.onDeleteById.emit(id);


  }
}
