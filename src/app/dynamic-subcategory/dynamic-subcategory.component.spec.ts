import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSubcategoryComponent } from './dynamic-subcategory.component';

describe('DynamicSubcategoryComponent', () => {
  let component: DynamicSubcategoryComponent;
  let fixture: ComponentFixture<DynamicSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
