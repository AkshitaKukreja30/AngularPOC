import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit {

  routevalue :any;

  constructor(private route: ActivatedRoute ){
    
  }
  ngOnInit(): void {
    this.routevalue = this.route.snapshot.paramMap.get('id');
    console.log(this.routevalue);
  }

}
