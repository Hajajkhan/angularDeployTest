import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HajajDetailComponent } from './hajaj-detail.component';

describe('HajajDetailComponent', () => {
  let component: HajajDetailComponent;
  let fixture: ComponentFixture<HajajDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HajajDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HajajDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
