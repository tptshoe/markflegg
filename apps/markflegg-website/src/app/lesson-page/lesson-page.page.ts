import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../interfaces/lesson';
import { ModulesService } from '../services/modules/modules.service';

@Component({
  selector: 'markflegg-lesson-page',
  templateUrl: './lesson-page.page.html',
  styleUrls: ['./lesson-page.page.scss'],
})
export class LessonPagePage implements OnInit {
  public lesson: Lesson = { id: 0, title: '', content: '' };

  constructor(
    private modulesService: ModulesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const moduleId = this.route.snapshot.paramMap.get('moduleId');
    const lessonId = this.route.snapshot.paramMap.get('lessonId');
    this.lesson = this.modulesService.getLessonById(
      parseInt(moduleId),
      +lessonId
    );
  }
}
