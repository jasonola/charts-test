import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStudentsChartComponent } from './active-students-chart.component';

describe('ActiveStudentsChartComponent', () => {
  let component: ActiveStudentsChartComponent;
  let fixture: ComponentFixture<ActiveStudentsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveStudentsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveStudentsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
