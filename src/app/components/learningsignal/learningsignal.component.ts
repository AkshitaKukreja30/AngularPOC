import { Component } from '@angular/core';
import { CounterbtnComponent } from '../counterbtn/counterbtn.component';
import { CounterdisplayComponent } from '../counterdisplay/counterdisplay.component';

@Component({
  selector: 'app-learningsignal',
  standalone: true,
  imports: [CounterbtnComponent, CounterdisplayComponent],
  templateUrl: './learningsignal.component.html',
  styleUrl: './learningsignal.component.css'
})
export class LearningsignalComponent {

}
