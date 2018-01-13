import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverFundsPage } from './recover-funds';

@NgModule({
  declarations: [
    RecoverFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoverFundsPage),
  ],
})
export class RecoverFundsPageModule {}
