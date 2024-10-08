import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnrxjsComponent } from './learnrxjs.component';

describe('LearnrxjsComponent', () => {
  let component: LearnrxjsComponent;
  let fixture: ComponentFixture<LearnrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnrxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
