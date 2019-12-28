import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HajajComponent } from './hajaj.component';

describe('HajajComponent', () => {
  let component: HajajComponent;
  let fixture: ComponentFixture<HajajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HajajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HajajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
