import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamenesMedicosPage } from './examenes-medicos';

@NgModule({
  declarations: [
    ExamenesMedicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamenesMedicosPage),
  ],
})
export class ExamenesMedicosPageModule {}
