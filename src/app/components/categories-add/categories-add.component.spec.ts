import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAddComponent } from './categories-add.component';

describe('CategoriesAddComponent', () => {
  let component: CategoriesAddComponent;
  let fixture: ComponentFixture<CategoriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
