import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategChartComponent } from './categ-chart.component';

describe('CategChartComponent', () => {
  let component: CategChartComponent;
  let fixture: ComponentFixture<CategChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
