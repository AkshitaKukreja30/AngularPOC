import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

}
