import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmargementComponent } from './emargement.component';

describe('EmargementComponent', () => {
  let component: EmargementComponent;
  let fixture: ComponentFixture<EmargementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmargementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
