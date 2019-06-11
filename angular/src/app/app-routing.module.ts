import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionEditComponent } from './components/question/question-edit/question-edit.component';
import { QuestionEditListComponent } from './components/question/question-edit-list/question-edit-list.component';
import { QuestionAddComponent } from './components/question/question-add/question-add.component';
import { QuestionsComponent } from './components/question/questions/questions.component';


const routes: Routes = [
  {
    path: 'questions',
    component: QuestionsComponent,
    data: { title: 'List of Products' }
  },
  {
    path: 'question-add',
    component: QuestionAddComponent,
    data: { title: 'Add Product' }
  },
  {
    path: 'question-edit/:id',
    component: QuestionEditComponent,
    data: { title: 'Edit Product' }
  },
  {
    path: 'question-edit-list',
    component: QuestionEditListComponent,
    data: { title: 'Edit Product' }
  },
  { path: '',
    redirectTo: '/questions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
