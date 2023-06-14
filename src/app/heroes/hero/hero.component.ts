import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Flash';
  public age: number = 35;

  get capitalizeName(): string {
    return  ' Hola '.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`;
  }

  changeHero(): string {
    return this.name = 'Batman';
  }

  changeAge(): number {
    return this.age = 32;
  }


}
