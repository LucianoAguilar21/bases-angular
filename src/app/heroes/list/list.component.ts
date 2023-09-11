import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHeroe?: string;
  public heroNames:string[] = ['Spiderman','Ironman','Hulk','Thor'];

  deleteLastHero():void{
    this.deletedHeroe = this.heroNames.pop();
    
  }
}
