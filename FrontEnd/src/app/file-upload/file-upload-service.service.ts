import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FileUploadServiceService {
  constructor(private http: HttpClient) {}

  upload(image: any): any {
    return this.http.post("http://localhost:3001/uploadfile", image);
  }
  geImage(): Observable<any> {
    return this.http.get("http://localhost:3001/uploadfile");
  }
}
