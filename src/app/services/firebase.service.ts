import { Injectable,inject } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {User} from '../models/user.model' ;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);


  //acceder con usuario creado, autenticacion
  signIn(user:User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }


  //creacion de usuario----------
  signUp(user:User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }



  //actualizar Usarioio
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser,{displayName})
  }




}
 