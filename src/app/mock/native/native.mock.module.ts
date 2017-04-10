import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Camera} from "@ionic-native/camera";
import {CameraMock} from "./camera-mock";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {provide: Camera, useClass: CameraMock}
  ]
})
export class NativeMockModule {
}
