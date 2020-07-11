import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GridExampleComponent } from "./grid-example/grid-example.component";
import { OwlModule } from "ngx-owl-carousel";
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ShowImagesComponent } from './file-upload/show-images/show-images.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GridExampleComponent,
    FileUploadComponent,
    ShowImagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
