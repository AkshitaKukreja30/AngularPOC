import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductdailogComponent } from './addproductdailog.component';

describe('AddproductdailogComponent', () => {
  let component: AddproductdailogComponent;
  let fixture: ComponentFixture<AddproductdailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddproductdailogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductdailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
