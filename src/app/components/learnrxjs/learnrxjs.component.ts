import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-learnrxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learnrxjs.component.html',
  styleUrl: './learnrxjs.component.css'
})
export class LearnrxjsComponent implements OnInit {
  
  
  ngOnInit(): void {
    this.observable.subscribe({
      next(x){  // Handle the emitted values
        console.log("I am next", x);
      },
      error(x){  // Handle the error
        console.log("error occured");
      },
      complete() {  // Handle the completion
        console.log("completed");
      },
    } 
  );

  this.data$.pipe().subscribe(result =>  { console.log("Without map", result) } );

  this.data$.pipe(map( (x) => x *2)).subscribe(result =>  { console.log("With map" + result) } );

  this.data$.pipe(filter( (x) => x >= 2)).subscribe(result =>  { console.log("With filter" + result) } );

  }

   observable = new Observable((subscriber) => {
    subscriber.next(1);    // Emit values
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);  
      subscriber.complete();  // Notify that the observable is done emitting values
      subscriber.next(5)
    }, 1000);
  });

   data$ = of(1,2,3);

}
