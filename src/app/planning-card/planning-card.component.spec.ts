import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningCardComponent } from './planning-card.component';

describe('PlanningCardComponent', () => {
  let component: PlanningCardComponent;
  let fixture: ComponentFixture<PlanningCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
