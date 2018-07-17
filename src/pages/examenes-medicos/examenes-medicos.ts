import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExamenesMedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examenes-medicos',
  templateUrl: 'examenes-medicos.html',
})
export class ExamenesMedicosPage {

  items : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [{"tipo":"Sangre","fecha" : "10-10-10","clinica":"asassa"},
    {"tipo":"asaasas","fecha" : "10-10-10","clinica":"asaasasssa"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamenesMedicosPage');
  }

}
