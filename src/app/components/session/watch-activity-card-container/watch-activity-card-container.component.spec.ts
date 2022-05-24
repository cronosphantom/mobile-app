import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchActivityCardContainerComponent } from './watch-activity-card-container.component';

describe('WatchActivityCardContainerComponent', () => {
  let component: WatchActivityCardContainerComponent;
  let fixture: ComponentFixture<WatchActivityCardContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchActivityCardContainerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchActivityCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
