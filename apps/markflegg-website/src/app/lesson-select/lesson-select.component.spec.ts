import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

import { modulesServiceSpy } from '../mocks/mocks-app';
import { navControllerSpy } from '../mocks/mocks-ionic';
import { ModulesService } from '../services/modules/modules.service';
import { LessonSelectComponent } from './lesson-select.component';

describe('LessonSelectComponent', () => {
  let component: LessonSelectComponent;
  let fixture: ComponentFixture<LessonSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LessonSelectComponent],
      providers: [
        {
          provide: NavController,
          useValue: navControllerSpy,
        },
        {
          provide: ModulesService,
          useValue: modulesServiceSpy,
        },
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
      ],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class member, "module," that is an object', () => {
    expect(component.module instanceof Object).toBe(true);
  });

  it('should set up the passed-in module on the module class member', () => {
    const modulesService: ModulesService = fixture.debugElement.injector.get(
      ModulesService
    );

    jest.spyOn(modulesService, 'getModuleById').mockReturnValue({
      id: 1,
      title: 'test',
      description: 'test',
      lessons: [
        { title: 'lesson 1' },
        { title: 'lesson 2' },
        { title: 'lesson 3' },
        { title: 'lesson 4' },
      ],
    });

    component.ngOnInit();

    expect(component.module.lessons.length).toBe(4);
  });
});
