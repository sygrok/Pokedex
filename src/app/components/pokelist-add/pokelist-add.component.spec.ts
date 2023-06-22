import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelistAddComponent } from './pokelist-add.component';

describe('PokelistAddComponent', () => {
  let component: PokelistAddComponent;
  let fixture: ComponentFixture<PokelistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokelistAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokelistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
