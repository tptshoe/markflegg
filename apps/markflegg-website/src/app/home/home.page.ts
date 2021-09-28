import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Module } from '../interfaces/module';

@Component({
  selector: 'markflegg-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public modules: Module[] = [];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.modules = [
      {
        id: 1,
        title: 'Module One',
        description: 'Test',
        lessons: [{ id: 1, title: '1', content: 'hello1' }],
      },
      {
        id: 2,
        title: 'Module Two',
        description: 'Test',
        lessons: [{ id: 2, title: '1', content: 'hello2' }],
      },
      {
        id: 3,
        title: 'Module Three',
        description: 'Test',
        lessons: [{ id: 3, title: '1', content: 'hello3' }],
      },
      {
        id: 4,
        title: 'Module Four',
        description: 'Test',
        lessons: [{ id: 4, title: '1', content: 'hello4' }],
      },
      {
        id: 5,
        title: 'Module Five',
        description: 'Test',
        lessons: [{ id: 5, title: '1', content: 'hello5' }],
      },
    ];
  }

  openModule(id: number) {
    this.navCtrl.navigateForward('/module/' + id);
  }
}
