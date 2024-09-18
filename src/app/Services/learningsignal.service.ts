import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearningsignalService {

  constructor() { }

  counterVal = signal<number>(0);
  players = signal<string[]>(['Kohli']);

}
