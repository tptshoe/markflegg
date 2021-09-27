import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonSelectRoutingModule } from './lesson-select-routing.module';
import { LessonSelectComponent } from './lesson-select.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LessonSelectComponent],
  imports: [CommonModule, LessonSelectRoutingModule, IonicModule],
})
export class LessonSelectModule {}
