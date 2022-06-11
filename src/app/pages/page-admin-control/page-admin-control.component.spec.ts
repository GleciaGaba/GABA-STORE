import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminControlComponent } from './page-admin-control.component';

describe('PageAdminControlComponent', () => {
  let component: PageAdminControlComponent;
  let fixture: ComponentFixture<PageAdminControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdminControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
