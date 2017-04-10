import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {Camera} from "@ionic-native/camera";
import {CameraMock} from "./mock/native/camera-mock";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // NativeMockModule
    // NativeModule
  ],
  // providers: [Camera],
  providers: [{provide: Camera, useClass: CameraMock}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
