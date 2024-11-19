import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransChartComponent } from './trans-chart.component';

describe('TransChartComponent', () => {
  let component: TransChartComponent;
  let fixture: ComponentFixture<TransChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
