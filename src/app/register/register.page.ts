import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nom: string;
  prenom : string;
  email: string;
  password: string;



  constructor(
    private fireAuth: AngularFireAuth,
   public service: AuthentificationService,
   private database: AngularFireDatabase,
   private firestore: AngularFirestore,
   private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  inscrire(form: NgForm){
    console.log(form['email'], form['password']);
    
    this.service.RegisterUser(form['email'], form['password']);
  }


  inscription(){
    console.log(this.email);
     this.email
    this.fireAuth.createUserWithEmailAndPassword(this.email, this.password).
    then(res => {
      this.firestore.collection('user').doc(res.user.uid).set({
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
        uid: res.user.uid,
        profile: ""
      });
      this.navCtrl.navigateForward(['accueil']);
    })
    
  }

}
