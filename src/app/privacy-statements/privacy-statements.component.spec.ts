import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyStatementsComponent } from './privacy-statements.component';

describe('PrivacyStatementsComponent', () => {
  let component: PrivacyStatementsComponent;
  let fixture: ComponentFixture<PrivacyStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
