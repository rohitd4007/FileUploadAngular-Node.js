import { Component, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Book";

  uimage: string;
  // courseReg(courseName: any) {
  //   console.log(courseName);
  // }

  onActivate(componentReference) {
    console.log(componentReference);
    // componentReference.anyFunction();
    //Below will subscribe to the searchItem emitter
    componentReference.onRegister.subscribe((data) => {
      // Will receive the data from child here
      console.log(data);
      this.uimage = data.data.user[1].photo;
    });
  }
}
