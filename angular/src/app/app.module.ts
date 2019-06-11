import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillComponent } from './components/skill/skill.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SkillsPipe } from './pipes/skills.pipe';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatCardModule} from '@angular/material/card';
import { QuestionAddComponent } from './components/question/question-add/question-add.component';
import { QuestionEditComponent } from './components/question/question-edit/question-edit.component';
import { QuestionEditListComponent } from './components/question/question-edit-list/question-edit-list.component';
import { QuestionsComponent } from './components/question/questions/questions.component';
import { MatAccordion, MatButtonToggleModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionAddComponent,
    QuestionEditComponent,
    HeaderComponent,
    FooterComponent,
    SkillComponent,
    MenuComponent,
    SkillsPipe,
    QuestionEditListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatButtonModule, PopoverModule.forRoot(), ModalModule.forRoot()
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
