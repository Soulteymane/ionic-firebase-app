import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any
  constructor(
    public router: Router,
    private fireAuth: AngularFireAuth,
    private navCtrl: NavController,
  ) {
    this.sideMenu();
  }

  sideMenu(){
    this.navigate = [
      {
        title : "accueil",
        icon: "Home",
        url : "/accueil"
      },
      {
        title : "profile",
        icon:  "people-circle-outline",
        url : "/profile"
      },
    
      {
        title : "recherche",
        icon:  "people-circle-outline",
        url : "/recherche"
      },
      {
        title : "Deconnexion",
        icon: "log-out-outline",
        url : "/home"
      },

    ]
  }

  async deconnexion() {
   // console.log(this.username);
    if(this.fireAuth.currentUser){
      this.fireAuth.signOut().then(()=>{
        this.navCtrl.navigateForward(['home'])
      });
    }
   


  }

  async accueil() {
       this.router.navigate(['/accueil']);
 
   }

   
}
