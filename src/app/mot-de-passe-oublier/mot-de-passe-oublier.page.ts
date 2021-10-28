import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mot-de-passe-oublier',
  templateUrl: './mot-de-passe-oublier.page.html',
  styleUrls: ['./mot-de-passe-oublier.page.scss'],
})
export class MotDePasseOublierPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }
  async show() {
    let alert = await this.alertCtrl.create({
      header:"Confirmation",
      subHeader:"Email",
      message:"demande envoyé",
      buttons: [
        {
          text:"Ok",
          handler: () => {
  
          }
        }
  
      ]
  
    });
    alert.present()
  }
    ngOnInit() {
    }
  
  }