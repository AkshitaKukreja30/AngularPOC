import { Component, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, CommonModule, FormsModule, Child1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mesageFromHome = "Welcome Home"
  currentDate = new Date();
  jsonObj = {
    "key1": "firstKey",
    "key2" : "secondKey",
    "key3" : "thirdKey"
  }

  listOfJsonObjs = [
    {'id':1, 'name': 'name1', 'value': 'v1'},
    {'id':2, 'name': 'name2', 'value': 'v2'},
    {'id':3, 'name': 'name3', 'value': 'v3'}
  ]

  imageUrl: string = 'https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg';
  isDisabled: boolean = false;
  inputDay: string = "";

  enableAttributeDirectives: boolean = true;
  _color = 'yellow';
  _font = 34;
  parentData: string = 'This string has been passed from parent to child using @Input';
  dataFromChild : string = ''

  @ViewChild(Child1Component) childComponent : Child1Component

  receiveData(data: string) {
    this.dataFromChild = data;  
  }

  onButtonClick() {
    console.log('Button was clicked!');
  }


  openMatDialog(){
    
  }


  updateTitle(event: any){
    this.mesageFromHome = event.target.value;
  }

  AddFruit(fruit: string){
    this.childComponent.AddFruits(fruit);
  }


  
}



