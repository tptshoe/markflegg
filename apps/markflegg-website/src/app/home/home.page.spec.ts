import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
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
});
