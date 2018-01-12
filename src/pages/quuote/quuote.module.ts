import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuuotePage } from './quuote';

@NgModule({
  declarations: [
    QuuotePage,
  ],
  imports: [
    IonicPageModule.forChild(QuuotePage),
  ],
})
export class QuuotePageModule {}
