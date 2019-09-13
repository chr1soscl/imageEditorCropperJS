import { Component, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imageUrl='https://i.redd.it/pei6h9caxoa21.jpg';
  title = 'imageEditorCropperJS';
  @ViewChild('angularCropper') public angularCropper: CropperComponent;

  cropperOptions = {
    center: true,
    guides: true,
    viewMode: 1,
    aspectRatio: 3.1,
    scalable: true,
    zoomable: true,
    autoCrop: true,
    zoom: (e) => {},
    crop: (e) => {},
    cropstart: (e) => {},
    cropend: (e) => {},
    ready: (e) => {}
  };

  zoomIn(){
    this.angularCropper.cropper.zoom(0.1);
  }

  zoomOut(){
    this.angularCropper.cropper.zoom(-0.1);
  }

  setDragMode(mode){
    this.angularCropper.cropper.setDragMode(mode);
  }

  crop(){
    this.angularCropper.cropper.crop();
  }

  clear(){
    this.angularCropper.cropper.clear();
  }
}
