import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFromJsonDataComponent } from './form-from-json-data.component';

describe('FormFromJsonDataComponent', () => {
  let component: FormFromJsonDataComponent;
  let fixture: ComponentFixture<FormFromJsonDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFromJsonDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFromJsonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
