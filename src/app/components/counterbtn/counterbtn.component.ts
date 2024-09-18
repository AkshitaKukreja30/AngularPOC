import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { LearningsignalComponent } from '../learningsignal/learningsignal.component';
import { LearningsignalService } from '../../Services/learningsignal.service';

@Component({
  selector: 'app-counterbtn',
  standalone: true,
  imports: [MatButton, MatButtonModule],
  templateUrl: './counterbtn.component.html',
  styleUrl: './counterbtn.component.css'
})
export class CounterbtnComponent {

constructor(private signalService: LearningsignalService){}


Increment(){
console.log("inside increment");
this.signalService.counterVal.update(x => x + 1);
}


Decrement(){
  this.signalService.counterVal.update(x => x - 1);
}

Reset(){
  this.signalService.counterVal.update(x => x =0);
}

}
