import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelistUpdateComponent } from './pokelist-update.component';

describe('PokelistUpdateComponent', () => {
  let component: PokelistUpdateComponent;
  let fixture: ComponentFixture<PokelistUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokelistUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokelistUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
