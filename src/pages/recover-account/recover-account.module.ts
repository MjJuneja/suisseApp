import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverAccountPage } from './recover-account';

@NgModule({
  declarations: [
    RecoverAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoverAccountPage),
  ],
  exports:[
    RecoverAccountPage,
  ]
})
export class RecoverAccountPageModule {}
