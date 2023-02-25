import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderTabsComponent } from './main-header-tabs.component';

describe('MainHeaderTabsComponent', () => {
  let component: MainHeaderTabsComponent;
  let fixture: ComponentFixture<MainHeaderTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
