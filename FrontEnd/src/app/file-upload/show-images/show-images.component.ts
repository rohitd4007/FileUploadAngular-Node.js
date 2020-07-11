import { FileUploadServiceService } from "./../file-upload-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-images",
  templateUrl: "./show-images.component.html",
  styleUrls: ["./show-images.component.css"],
})
export class ShowImagesComponent implements OnInit {
  displayData;
  constructor(private fileuploadservice: FileUploadServiceService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.fileuploadservice.geImage().subscribe((data) => {
      console.log(data);
      this.displayData = data;
    });
  }
}
