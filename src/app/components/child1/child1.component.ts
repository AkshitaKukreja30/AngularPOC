import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatButton],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  @Input() dataFromParent: string = ''; 
  @Output() dataFromChild = new EventEmitter<string>();

  fruits = ['Apple', 'Orange', 'Guava'];

 SendDataToParent(){
  this.dataFromChild.emit('I am being sent from child to parent');
  console.log("data sent");
 }

 AddFruits(fruit: string){
  this.fruits.push(fruit);
 }

}
