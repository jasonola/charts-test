import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatablesComponent } from './matables.component';

describe('MatablesComponent', () => {
  let component: MatablesComponent;
  let fixture: ComponentFixture<MatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
