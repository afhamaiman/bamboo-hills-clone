import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPlanComponent } from './layout-plan.component';

describe('LayoutPlanComponent', () => {
  let component: LayoutPlanComponent;
  let fixture: ComponentFixture<LayoutPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
