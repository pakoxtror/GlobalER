import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitasMedicasPage } from './citas-medicas';

@NgModule({
  declarations: [
    CitasMedicasPage,
  ],
  imports: [
    IonicPageModule.forChild(CitasMedicasPage),
  ],
})
export class CitasMedicasPageModule {}
