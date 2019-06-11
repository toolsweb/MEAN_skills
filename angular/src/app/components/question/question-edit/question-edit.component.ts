import { Component, OnInit, TemplateRef } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { QuestionService } from 'src/app/services/question.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {

//  questionForm: FormGroup;
// _id:string='';
// prod_content:string='';
// prod_skillc:string='';
  currentQuestion:any;
  modalRef: BsModalRef;
  skills;
  skill;
  constructor(private modalService: BsModalService,
    private questionService: QuestionService, private skillService: SkillService,
    private router: Router, private route: ActivatedRoute,
    ) { 
       
     this.getQuestion(this.route.snapshot.params['id']);
  // this.questionForm = this.formBuilder.group({
  //   '_id' : [null, Validators.required],

  //   'question_content' : [null, Validators.required],
  //   'question_skill' : [null, Validators.required],
  // });
  }


  
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

  openConfirmationModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteQuestion(id)
  {
    this.modalRef.hide();
    this.questionService.deleteQuestion(id)
    .subscribe(res => {
      console.log(res);
      this.currentQuestion = res;

    
      this.skillService.changeSkill('');

      this.router.navigate(['/question-edit-list']);
       console.log(res);
    
    });
  }


  getQuestion(id) {
    this.questionService.getQuestion(id).subscribe(data => {
      console.log(data);
      this.currentQuestion = data;

     // this._id = data._id;
      // this.questionForm.setValue({
      //   question_content: data.content,
      //   question_skill: data.skill,
      // });
    });
  }

  onSubmit(id, questionForm:NgForm) {
    console.log(questionForm.value);  // { first: '', last: '' }
    this.questionService.updateQuestion(id, questionForm.value)
      .subscribe(res => {
        
           let id = res['_id'];
           this.skillService.changeSkill('');

           this.router.navigate(['/questions']);
         }, (err) => {
           console.log(err);
         });
  }


}
