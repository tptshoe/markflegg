import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Module } from '../interfaces/module';
import { ModulesService } from '../services/modules/modules.service';

@Component({
  selector: 'markflegg-lesson-select',
  templateUrl: './lesson-select.component.html',
  styleUrls: ['./lesson-select.component.css'],
})
export class LessonSelectComponent implements OnInit {
  public module: Module = {
    id: 0,
    title: '',
    description: '',
    lessons: [],
  };

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modulesService: ModulesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.module = this.modulesService.getModuleById(parseInt(id));
  }
}
