import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDashComponent } from './module-dash.component';

describe('ModuleDashComponent', () => {
  let component: ModuleDashComponent;
  let fixture: ComponentFixture<ModuleDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
