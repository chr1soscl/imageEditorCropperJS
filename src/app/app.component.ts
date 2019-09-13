import { Component, ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';
import { NgxCropperjsComponent } from 'ngx-cropperjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imageUrl='https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg';
  title = 'imageEditorCropperJS';
  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  @ViewChild('ngxCropper') public ngxCropper: NgxCropperjsComponent;

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

  ngxZoomIn(){
    this.ngxCropper.cropper.zoom(0.1);
  }

  ngxZoomOut(){
    this.ngxCropper.cropper.zoom(-0.1);
  }

  ngxSetDragMode(mode){
    this.ngxCropper.cropper.setDragMode(mode);
  }

  ngxCrop(){
    this.ngxCropper.cropper.crop();
  }

  ngxClear(){
    this.ngxCropper.cropper.clear();
  }

}
