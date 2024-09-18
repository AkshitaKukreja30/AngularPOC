import { Component, computed, effect } from '@angular/core';
import { LearningsignalService } from '../../Services/learningsignal.service';
import { CommonModule } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent {

counterDisplayVal : number ;
totalPlayers = computed( () => this.signalService.players().length )

totalPlayers$ = toObservable(this.totalPlayers);
signalCount = toSignal(this.totalPlayers$);


constructor(public signalService: LearningsignalService){
  effect( () => {
    this.counterDisplayVal = this.signalService.counterVal();
    } );
}
  





}


