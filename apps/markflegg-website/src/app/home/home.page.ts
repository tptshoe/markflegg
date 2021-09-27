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
        lessons: [{ title: '1' }],
      },
      {
        id: 2,
        title: 'Module Two',
        description: 'Test',
        lessons: [{ title: '1' }],
      },
      {
        id: 3,
        title: 'Module Three',
        description: 'Test',
        lessons: [{ title: '1' }],
      },
      {
        id: 4,
        title: 'Module Four',
        description: 'Test',
        lessons: [{ title: '1' }],
      },
      {
        id: 5,
        title: 'Module Five',
        description: 'Test',
        lessons: [{ title: '1' }],
      },
    ];
  }

  openModule(id: number) {
    this.navCtrl.navigateForward('/module/' + id);
  }
}
