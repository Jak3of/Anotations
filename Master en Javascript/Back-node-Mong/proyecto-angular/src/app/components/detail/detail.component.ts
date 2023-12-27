import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  public title: string = 'Detalles de';
  public project: Project;
  public message!: string;
  public filesToUpload!: Array<File>;
  public imagePreview!: string;
  public id!: string;
  public url: string;

  constructor(public uploadService: UploadService, public projectService: ProjectService , private _route: ActivatedRoute , private _router: Router ) {
    this.project = new Project('', '', '', '', 2023, '', '');
    this.url = Global.url;
  }

  ngOnInit(): void {
    // cargar el proyecto
    this.id = this._route.snapshot.params['id'];
    this.projectService.getProject(this.id).subscribe(
      response =>{
        this.project = response.project;
        console.log(this.project);
        if(!this.project){
          this._router.navigate(['/']);
        }
      }
    )
    
  }

  onSubmit(){

    console.log();
    this.projectService.updateProject(this.project).subscribe(
      response =>{

        if(!response.project){
          this.message = 'Error en el servidor';
        }else{
          this.message = 'El proyecto se actualizo correctamente';
          this.project = response.project;

          if(this.filesToUpload){
            this.uploadService.makeFileRequest(
              response.project._id, [], this.filesToUpload, 'image')
              .then((result:any) =>{
                console.log(result);
                this.project.image = result.image;
              }, error =>{
                console.log(error);
                this.message += '  ' + error.error.message;
              }); 
            }
            
            
            setTimeout(() =>{
              this._router.navigate(['/proyectos']);
            }, 3000);
            
          }
      }
    )
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  getImage(image : string){
    let image_path = Global.url + 'getImage/';
    image ? image_path += image : image_path += 'null';
    return image_path;
  }


}
