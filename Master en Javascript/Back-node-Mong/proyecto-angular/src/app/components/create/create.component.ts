import { Component, OnInit } from '@angular/core';
import { Project} from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  public title : string;
  public project : Project;
  public message! : string;
  public filesToUpload! : Array<File>;

  constructor( private projectService: ProjectService, private uploadService: UploadService) {
    this.title = 'Create Project';
    this.project = new Project('', '', '', '', 2023, '', '');
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    
    this.projectService.saveProject(this.project).subscribe(
      response =>{

        console.log(response);
        this.message = response.message;

        if(this.filesToUpload){
          this.uploadService.makeFileRequest(
            response.project._id, [], this.filesToUpload, 'image')
            .then((result:any) =>{
              console.log(result);
              this.message = response.message + '  ' + "Image saved";
              this.project = new Project('', '', '', '', 2023, '', '');
            }, error =>{
              this.message = response.message + '  ' + error.error.message;
            }); 
        }

      }, error =>{

        console.log(<any>error);
        this.message = error.error.message;


      }
    );
  }

  fileChangeEvent(fileInput: any){

    this.filesToUpload = <Array<File>>fileInput.target.files;
    
  }

  



}
