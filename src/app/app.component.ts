import {Component} from "@angular/core";
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  cameraImg = 'data:image/jpeg;base64,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';

  constructor(private camera: Camera) {}

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  getPicture(): void {

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.cameraImg = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }

}
