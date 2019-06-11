import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-question-edit-list',
  templateUrl: './question-edit-list.component.html',
  styleUrls: ['./question-edit-list.component.scss']
})
export class QuestionEditListComponent implements OnInit {

  questions:Question[];
  filterSkill:string;
  constructor(private questionService: QuestionService, private skillService: SkillService) { 
    this.filterSkill = "5cfae29907b87f5f8d9bdb5e";
    this.skillService.currentSkill.subscribe((filterSkill) => {
      console.log(filterSkill);
        this.filterSkill = filterSkill;
    });

    //this.questions = [{content: 'kkk'}];
  }

  ngOnInit() {
    this.questionService.getQuestions()
    .subscribe(res => {

    this.questions = res;
    
       console.log(res);
    //   this.isLoadingResults = false;
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    });

  }

}
