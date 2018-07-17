import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicinasPage } from './medicinas';

@NgModule({
  declarations: [
    MedicinasPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicinasPage),
  ],
})
export class MedicinasPageModule {}
