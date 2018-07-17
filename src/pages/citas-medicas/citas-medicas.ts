import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CitasMedicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas-medicas',
  templateUrl: 'citas-medicas.html',
})
export class CitasMedicasPage {

  items : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [{"tipo":"adada","fecha" : "10-10-10","clinica":"asassa"},
    {"tipo":"asaasas","fecha" : "10-10-10","clinica":"asaasasssa"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitasMedicasPage');
  }

}
