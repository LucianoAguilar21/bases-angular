import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return  `${this.capitalizeName} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'SpiderMan';
  }

  changeAge():void{
    this.age = 17;
  }

  reset():void{
    this.name = 'Ironman';
    this.age = 45;
  }

}
