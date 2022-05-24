import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D0PlanningLaunchPage } from './d0-planning-launch.page';

describe('D0PlanningLaunchPage', () => {
  let component: D0PlanningLaunchPage;
  let fixture: ComponentFixture<D0PlanningLaunchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ D0PlanningLaunchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D0PlanningLaunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
