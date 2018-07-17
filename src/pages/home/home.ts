import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CitasMedicasPage} from '../citas-medicas/citas-medicas'
import {ExamenesMedicosPage} from '../examenes-medicos/examenes-medicos'
import { RecetasMedicasPage } from '../recetas-medicas/recetas-medicas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pasar (){
    this.navCtrl.push(CitasMedicasPage)
  }
  pasar2 (){
    this.navCtrl.push(ExamenesMedicosPage)
  }
  abrirPagina(pagina){
    this.navCtrl.push(RecetasMedicasPage)
  }
}
