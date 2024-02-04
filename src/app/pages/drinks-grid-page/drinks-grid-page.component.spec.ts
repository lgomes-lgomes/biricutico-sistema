import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksGridPageComponent } from './drinks-grid-page.component';

describe('DrinksGridPageComponent', () => {
  let component: DrinksGridPageComponent;
  let fixture: ComponentFixture<DrinksGridPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinksGridPageComponent]
    });
    fixture = TestBed.createComponent(DrinksGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
