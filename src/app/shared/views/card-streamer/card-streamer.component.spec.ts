import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStreamerComponent } from './card-streamer.component';

describe('CardStreamerComponent', () => {
  let component: CardStreamerComponent;
  let fixture: ComponentFixture<CardStreamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStreamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
