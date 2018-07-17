import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecetasMedicasPage } from './recetas-medicas';

@NgModule({
  declarations: [
    RecetasMedicasPage,
  ],
  imports: [
    IonicPageModule.forChild(RecetasMedicasPage),
  ],
})
export class RecetasMedicasPageModule {}
