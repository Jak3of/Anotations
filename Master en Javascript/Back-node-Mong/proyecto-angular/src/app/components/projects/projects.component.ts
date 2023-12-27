import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  public title: string = 'Proyectos';
  public url : string;
  public projects : Project[];

  constructor ( public projectService: ProjectService, private _router: Router) {
    this.url = Global.url;

    this.projects = [
      new Project('', '', '', '', 2023, '', '')
    ]
  }

  ngOnInit(): void {

    this.projectService.getProjects().subscribe(
      response =>{
        this.projects = response.projects;
        console.log(this.projects);
      },
      error =>{

        console.log(<any>error);
      }
    )
    
  }

  deleteProject(id : string){
    console.log('delete', id);
    this.projectService.deleteProject(id).subscribe(
      response =>{
        this.projects = this.projects.filter(project => project._id != id);
        console.log(this.projects);
        
      }, error =>{

        console.log(<any>error);
      }
    )
  }

  getImage(image : string){
    let image_path = Global.url + 'getImage/';
    image ? image_path += image : image_path += 'null';
    return image_path;
  }

  editProject(project : Project){
    
    this._router.navigate(['/proyectos/editar/'+ project._id]);
  }
}
