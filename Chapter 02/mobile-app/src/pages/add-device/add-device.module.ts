import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDevicePage } from './add-device';

@NgModule({
  declarations: [
    AddDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(AddDevicePage),
  ],
  exports: [
    AddDevicePage
  ]
})
export class AddDevicePageModule {}
