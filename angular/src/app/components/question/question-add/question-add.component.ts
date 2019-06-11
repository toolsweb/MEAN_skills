import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/Skill';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.scss']
})
export class QuestionAddComponent implements OnInit {

  skills:Skill[];
  constructor(private skillService : SkillService, private questionService: QuestionService,
    private router:Router) { }

  ngOnInit() {
    this.skillService.getSkills()
    .subscribe(res => {

    //   this.data = res;
       console.log(res);
       this.skills = res;
    //   this.isLoadingResults = false;
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    });
  }

  onSubmit(questionForm:NgForm) {
    console.log(questionForm.value);  // { first: '', last: '' }
    this.questionService.addQuestion(questionForm.value)
      .subscribe(res => {
        
           let id = res['_id'];
           this.skillService.changeSkill(questionForm.value.skill);

           this.router.navigate(['/questions']);
         }, (err) => {
           console.log(err);
         });
  }

  
}
