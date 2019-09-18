import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubdetailsComponent } from './menu-subdetails.component';

describe('MenuSubdetailsComponent', () => {
  let component: MenuSubdetailsComponent;
  let fixture: ComponentFixture<MenuSubdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSubdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSubdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
