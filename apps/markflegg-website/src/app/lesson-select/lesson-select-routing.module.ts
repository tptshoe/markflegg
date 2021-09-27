import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonSelectComponent } from './lesson-select.component';

const routes: Routes = [{ path: '', component: LessonSelectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonSelectRoutingModule { }
