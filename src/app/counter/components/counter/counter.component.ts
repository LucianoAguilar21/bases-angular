import { Component } from '@angular/core';

// utilizar snippet - a-component

// Se convierte en component con el decorador @Component
@Component({
    selector:'app-counter',
    templateUrl:'./counter.component.html',
    styleUrls:['./counter.component.css']
})
export class CounterComponent{


    public counter: number = 10;

    increaseOne(value :number):void{
      this.counter+=value;
    }
  
    reset():void{
      this.counter=10;
    }

}