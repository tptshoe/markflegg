import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { modulesServiceSpy } from '../mocks/mocks-app';
import { ModulesService } from '../services/modules/modules.service';

import { LessonPagePage } from './lesson-page.page';

describe('LessonPagePage', () => {
  let component: LessonPagePage;
  let fixture: ComponentFixture<LessonPagePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LessonPagePage],
        imports: [IonicModule.forRoot()],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                paramMap: {
                  get: () => {
                    return '1';
                  },
                },
              },
            },
          },
          { provide: ModulesService, useValue: modulesServiceSpy },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(LessonPagePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a lesson class member', () => {
    expect(component.lesson).toBeDefined();
  });

  it('should set up the passed in lesson as the lesson class member', () => {
    const modulesService: any = fixture.debugElement.injector.get(
      ModulesService
    );
    jest.spyOn(modulesService, 'getLessonById').mockReturnValue({
      id: 1,
      title: 'lesson 1',
      content: 'this is the test content',
    });

    component.ngOnInit();

    expect(component.lesson.title).toBe('lesson 1');
  });
});
