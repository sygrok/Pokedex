import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelistDetailComponent } from './pokelist-detail.component';

describe('PokelistDetailComponent', () => {
  let component: PokelistDetailComponent;
  let fixture: ComponentFixture<PokelistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokelistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokelistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
