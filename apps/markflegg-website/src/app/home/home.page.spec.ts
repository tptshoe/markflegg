import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { navControllerSpy } from '../mocks/mocks-ionic';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        providers: [{ provide: NavController, useValue: navControllerSpy }],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create succesfully', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class member called modules that is an array', () => {
    expect(component.modules instanceof Array).toBe(true);
  });

  it('the modules class member should contain 5 modules after ngOnInit has been triggered', () => {
    component.ngOnInit();

    expect(component.modules.length).toBe(5);
  });

  it('the openModule() function should navigate to the LessonListPage', () => {
    const navCtl = fixture.debugElement.injector.get(NavController);
    const testModule = { title: 'fake module', id: 1 };

    component.openModule(testModule.id);

    expect(navCtl.navigateForward).toHaveBeenCalledWith(
      '/module/' + testModule.id
    );
  });
});
