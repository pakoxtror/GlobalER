import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CitasMedicasPage} from '../citas-medicas/citas-medicas'
import {ExamenesMedicosPage} from '../examenes-medicos/examenes-medicos'

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
}
