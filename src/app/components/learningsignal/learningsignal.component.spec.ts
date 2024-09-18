import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningsignalComponent } from './learningsignal.component';

describe('LearningsignalComponent', () => {
  let component: LearningsignalComponent;
  let fixture: ComponentFixture<LearningsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningsignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
