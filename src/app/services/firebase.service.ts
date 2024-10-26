import { Injectable,inject } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {User} from '../models/user.model' ;
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {getFirestore, setDoc, doc} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject (AngularFirestore);


  //acceder con usuario creado, autenticacion
  signIn(user:User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }


  //creacion de usuario----------
  signUp(user:User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }



  //actualizar Usarioio
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser,{displayName})
  }


  //Datos en Firebaseee-------------

  //setearDocumento

  //crear nuevo documento, o remplezarlo si ya existe
  setDocument(path: string , data:any) {
    return setDoc(doc(getFirestore(), path), data); 

  }



}
 