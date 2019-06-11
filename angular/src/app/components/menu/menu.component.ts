import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  skills: Skill[];
  constructor(private skillService: SkillService) 
  { 

  }

  ngOnInit() {
    this.skillService.getSkills()
    .subscribe(res => {
       console.log(res);
       this.skills = res;
    //   this.isLoadingResults = false;
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    });
  }

  filterBySkill(id)
  {
    this.skillService.changeSkill(id);
    console.log(id);
  }


}
