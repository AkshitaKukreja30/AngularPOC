import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, CommonModule, FormsModule],
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
  imageUrl: string = 'https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg';
  isDisabled: boolean = false;

  onButtonClick() {
    console.log('Button was clicked!');
  }


  openMatDialog(){
    
  }


  updateTitle(event: any){
    this.mesageFromHome = event.target.value;
  }
}



