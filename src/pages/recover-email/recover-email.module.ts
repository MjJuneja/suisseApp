import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverEmailPage } from './recover-email';

@NgModule({
  declarations: [
    RecoverEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoverEmailPage),
  ],
})
export class RecoverEmailPageModule {}
