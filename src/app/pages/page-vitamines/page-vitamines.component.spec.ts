import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVitaminesComponent } from './page-vitamines.component';

describe('PageVitaminesComponent', () => {
  let component: PageVitaminesComponent;
  let fixture: ComponentFixture<PageVitaminesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVitaminesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVitaminesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
