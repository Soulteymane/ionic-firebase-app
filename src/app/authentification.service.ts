import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController,ToastController } from '@ionic/angular'



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  userData: any;
  constructor(
   public ngFireAuth: AngularFireAuth,
   private loadingCrtl: LoadingController,
   private toastr: ToastController,
    ) 
    { 
  //   this.ngFireAuth.authState.subscribe(user => {
  //   if (user) {
  //     this.userData = user;
  //     localStorage.setItem('user', JSON.stringify(this.userData));
  //     JSON.parse(localStorage.getItem('user'));
  //   } else {
  //     localStorage.setItem('user', null);
  //     JSON.parse(localStorage.getItem('user'));
  //   }
  // })
}
 // Login in with email/password

 RegisterNew(email, password) {
  return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
}






 SignIn(email, password) {
  return this.ngFireAuth.signInWithEmailAndPassword(email, password)
}

 // Register user with email/password
 RegisterUser(email, password) {
  return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
}
}
