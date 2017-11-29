import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRobotComponent } from './my-robot.component';

describe('MyRobotComponent', () => {
  let component: MyRobotComponent;
  let fixture: ComponentFixture<MyRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
