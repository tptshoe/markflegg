import { Injectable } from '@angular/core';
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
      lessons: [{ title: 'test' }],
    };
  }
}
