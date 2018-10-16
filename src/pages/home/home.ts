import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinasPage } from '../bocinas/bocinas';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bocinas= BocinasPage;
  tv= TvPage;
  smart= SmartphonePage;
  lamp= LamparaPage;
  constructor(public navCtrl: NavController) {

  }

  clickBocinas(){
    this.navCtrl.push(this.bocinas);
  }

  clickTV(){
    this.navCtrl.push(this.tv);
  }

  clickSmartphone(){
    this.navCtrl.push(this.smart);
  }

  clickLampara(){
    this.navCtrl.push(this.lamp);
  }

}
