import { FormGroup } from "@angular/forms";
import { FileUploadServiceService } from "./file-upload-service.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  images;
  message;
  imagePath;
  imgURL;
  buttonshow = false;
  showimages = false;
  displayimage = false;

  constructor(private fileservice: FileUploadServiceService) {}

  ngOnInit(): void {}

  preview(files) {
    if (files.length > 0) {
      const file = files[0];
      this.images = file;
    }
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  display() {
    this.displayimage = true;
    this.showimages = false;
  }
  uploadFile() {
    this.buttonshow = true;
    this.showimages = true;
    const formdata = new FormData();
    formdata.append("photo", this.images);
    this.fileservice.upload(formdata).subscribe(
      (msg) => {
        console.log("success", msg);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
