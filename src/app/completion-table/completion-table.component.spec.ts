import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionTableComponent } from './completion-table.component';

describe('CompletionTableComponent', () => {
  let component: CompletionTableComponent;
  let fixture: ComponentFixture<CompletionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
