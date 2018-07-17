import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicinasPage } from '../medicinas/medicinas';
import { IndicacionesPage } from '../indicaciones/indicaciones';
import { DiagnosticoPage } from '../diagnostico/diagnostico';

/**
 * Generated class for the RecetasMedicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recetas-medicas',
  templateUrl: 'recetas-medicas.html',
})
export class RecetasMedicasPage {
  medicinasPage=MedicinasPage;
  indicacionesPage=IndicacionesPage;
  diagnosticoPage=DiagnosticoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecetasMedicasPage');
  }

}
