import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsVitaminesComponent } from './cards-vitamines.component';

describe('CardsVitaminesComponent', () => {
  let component: CardsVitaminesComponent;
  let fixture: ComponentFixture<CardsVitaminesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsVitaminesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsVitaminesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
