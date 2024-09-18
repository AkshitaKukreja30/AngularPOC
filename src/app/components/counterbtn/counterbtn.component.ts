import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { LearningsignalComponent } from '../learningsignal/learningsignal.component';
import { LearningsignalService } from '../../Services/learningsignal.service';
import { MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-counterbtn',
  standalone: true,
  imports: [MatButton, MatButtonModule, MatLabel, MatInput, MatInputModule],
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
  this.signalService.counterVal.set(0);
}

AddPlayer(player: string){
  this.signalService.players.update( x => [...x, player]);
}

}
