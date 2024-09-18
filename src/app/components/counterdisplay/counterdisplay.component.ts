import { Component, computed, effect, OnInit } from '@angular/core';
import { LearningsignalService } from '../../Services/learningsignal.service';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent {

counterDisplayVal : number ;
totalPlayers = computed( () => this.signalService.players().length )

constructor(public signalService: LearningsignalService){
  effect( () => {
    this.counterDisplayVal = this.signalService.counterVal();
    } );
}
  





}
