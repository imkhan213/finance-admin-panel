import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatComponent } from './add-cat.component';

describe('AddCatComponent', () => {
  let component: AddCatComponent;
  let fixture: ComponentFixture<AddCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
