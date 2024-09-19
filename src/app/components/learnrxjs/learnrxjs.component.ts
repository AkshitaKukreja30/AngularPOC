import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, filter, map, Observable, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-learnrxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learnrxjs.component.html',
  styleUrl: './learnrxjs.component.css'
})
export class LearnrxjsComponent implements OnInit {
  
  
  ngOnInit(): void {
    
  //   this.observable.subscribe({
  //     next(x){  // Handle the emitted values
  //       console.log("I am next", x);
  //     },
  //     error(x){  // Handle the error
  //       console.log("error occured");
  //     },
  //     complete() {  // Handle the completion
  //       console.log("completed");
  //     },
  //   } 
  // );

  // this.data$.pipe().subscribe(result =>  { console.log("Without map", result) } );

  // this.data$.pipe(map( (x) => x *2)).subscribe(result =>  { console.log("With map" + result) } );

  // this.data$.pipe(filter( (x) => x >= 2)).subscribe(result =>  { console.log("With filter" + result) } );


  //Subject acts like an observer n obserable, both. Multicasts values to multiple subscribers.
  //Observer1 gets values 1,2, then 3,4 becuase it is still an active and listens to changes.
  //Observer2 gets values 3,4 becuase it became an active listener later
  this.subject$.subscribe( x => { console.log("Observer 1 :" + x) });
  this.subject$.next(1);
  this.subject$.next(2);

  this.subject$.subscribe( x => { console.log("Observer 2 : " + x) });
  this.subject$.next(3);
  this.subject$.next(4);


  //A regular Subject only emits values to subscribers who are listening at the time of emission. Subscribers added later do not receive previously emitted values
  //Use BehaviorSubject if you want subscribers to always receive the most recent value.
  //Observer1 gets values 1,2, then 3,4 becuase it is still an active and listens to changes.
  //Observer2 gets values 2,3,4 as 2 was the latest value from observer 1 and then 3, 4
  this.behaviorsubject$.subscribe( x => { console.log("Behavior observer 1 :" + x) });
  this.behaviorsubject$.next(1);
  this.behaviorsubject$.next(2);

  this.behaviorsubject$.subscribe( x => { console.log("Behavior observer  2 : " + x) });
  this.behaviorsubject$.next(3);
  this.behaviorsubject$.next(4); 


  // Use ReplaySubject if you want subscribers to receive all previous values.
  this.replaySubject$.subscribe( x => { console.log("Replay observer 1 :" + x) });
  this.replaySubject$.next(1);
  this.replaySubject$.next(2);

  this.replaySubject$.subscribe( x => { console.log("Replay observer  2 : " + x) });
  this.replaySubject$.next(3);
  this.replaySubject$.next(4);


    // Use ReplaySubject if you want to emit latest value after completion
    this.asyncSubject$.subscribe( x => { console.log("Async observer 1 :" + x) });
    this.asyncSubject$.next(1);
    this.asyncSubject$.next(2);
    this.asyncSubject$.complete();

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

   subject$ = new Subject();

   behaviorsubject$ = new BehaviorSubject(0);
   replaySubject$ = new ReplaySubject();
   asyncSubject$ = new AsyncSubject();

}
