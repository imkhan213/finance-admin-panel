import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccComponent } from './add-acc.component';

describe('AddAccComponent', () => {
  let component: AddAccComponent;
  let fixture: ComponentFixture<AddAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAccComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
