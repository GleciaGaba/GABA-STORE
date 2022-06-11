import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminUpdateComponent } from './page-admin-update.component';

describe('PageAdminUpdateComponent', () => {
  let component: PageAdminUpdateComponent;
  let fixture: ComponentFixture<PageAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdminUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
