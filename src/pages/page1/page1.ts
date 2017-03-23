import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
