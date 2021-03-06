import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'module/:id',
    loadChildren: () =>
      import('./lesson-select/lesson-select.module').then(
        (m) => m.LessonSelectModule
      ),
  },
  {
    path: 'module/:moduleId/lesson/:lessonId',
    loadChildren: () =>
      import('./lesson-page/lesson-page.module').then(
        (m) => m.LessonPagePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
