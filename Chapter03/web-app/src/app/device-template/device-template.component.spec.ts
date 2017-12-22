import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTemplateComponent } from './device-template.component';

describe('DeviceTemplateComponent', () => {
  let component: DeviceTemplateComponent;
  let fixture: ComponentFixture<DeviceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
