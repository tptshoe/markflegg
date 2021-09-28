import { Injectable } from '@angular/core';
import { Lesson } from '../../interfaces/lesson';
import { Module } from '../../interfaces/module';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  constructor() {}

  getModuleById(id: number): Module {
    return {
      id,
      title: '',
      description: '',
      lessons: [
        { id: 1, title: 'lesson1', content: 'hello1' },
        { id: 2, title: 'lesson2', content: 'hello2' },
        { id: 3, title: 'lesson3', content: 'hello3' },
        { id: 4, title: 'lesson4', content: 'hello4' },
      ],
    };
  }

  getLessonById(moduleId: number, lessonId: number): Lesson {
    return {
      id: 1,
      title: 'lesson 1',
      content: 'this is the lesson content',
    };
  }
}
