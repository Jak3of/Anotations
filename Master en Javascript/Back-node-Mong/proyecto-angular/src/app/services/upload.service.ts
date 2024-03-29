import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from './global';


@Injectable()
export class UploadService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    makeFileRequest(id: string, params: Array<string>, files: Array<File> , name: string) {
        // resolve es que esta resuelto y reject es que esta 
        return new Promise(function (resolve, reject) {
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            // hacer la peticion post
            xhr.open("POST", Global.url +"upload-image/" +id, true);
            xhr.send(formData);
        });
    }
        
    
}
