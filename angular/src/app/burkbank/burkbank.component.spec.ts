import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkbankComponent } from './burkbank.component';

describe('BurkbankComponent', () => {
  let component: BurkbankComponent;
  let fixture: ComponentFixture<BurkbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurkbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
