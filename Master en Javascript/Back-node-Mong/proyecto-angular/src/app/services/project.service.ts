import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Project } from '../models/project';
import { Global } from '../services/global';

@Injectable()
export class ProjectService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    getProjects(): Observable<any>{
        return this._http.get(this.url+'getProjects');
    }

    getProject(id: string): Observable<any>{
        return this._http.get(this.url+'getProject/'+id);
    }

    saveProject(project : Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = { 'Content-Type': 'application/json' }
        return this._http.post(this.url+'saveProject', params, {headers});
    }

    deleteProject(id : string): Observable<any>{
        let headers = { 'Content-Type': 'application/json' }
        return this._http.delete(this.url+'deleteProject/'+id, {headers});
    }

    updateProject(project : Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = { 'Content-Type': 'application/json' }
        return this._http.put(this.url+'updateProject/'+project._id, params, {headers});
    }

    updateImage(project : Project, image: File): Observable<any>{
        // params para enviar imagenes
        let params = JSON.stringify(project);
        let headers = { 'Content-Type': 'application/json' }
        return this._http.put(this.url+'update-image/'+project._id, params, {headers});
    }
}