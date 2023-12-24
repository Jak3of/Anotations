import { Component, OnInit } from '@angular/core';
import { Project} from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  public title : string;
  public project : Project;

  constructor( private projectService: ProjectService) {
    this.title = 'Create Project';
    this.project = new Project('', '', '', '', 2023, '', '');
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.project);
    
  }


}
