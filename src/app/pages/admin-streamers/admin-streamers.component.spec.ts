import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStreamersComponent } from './admin-streamers.component';

describe('AdminStreamersComponent', () => {
  let component: AdminStreamersComponent;
  let fixture: ComponentFixture<AdminStreamersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStreamersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStreamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
