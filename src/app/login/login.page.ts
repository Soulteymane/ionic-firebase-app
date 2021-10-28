import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private navCtrl: NavController,
    private  firebaseAuth: AngularFireAuth) { }
  gotoaccueil(){
    this.navCtrl.navigateForward(['accueil']);
  }

  ngOnInit() {
  }

  login(){
    this.firebaseAuth.signInWithEmailAndPassword(this.email, this.password).
    then(res => {
      this.navCtrl.navigateForward(['accueil'])
    })
    
  }
}
