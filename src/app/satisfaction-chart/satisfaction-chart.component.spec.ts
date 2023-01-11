import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionChartComponent } from './satisfaction-chart.component';

describe('SatisfactionChartComponent', () => {
  let component: SatisfactionChartComponent;
  let fixture: ComponentFixture<SatisfactionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisfactionChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisfactionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
