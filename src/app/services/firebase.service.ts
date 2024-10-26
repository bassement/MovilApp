import { Injectable,inject } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,sendPasswordResetEmail} from 'firebase/auth';
import {User} from '../models/user.model' ;
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {getFirestore, setDoc, doc, getDoc} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject (AngularFirestore);


  //------Autenticacion
  getAuth(){
    return getAuth();
  }


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

  //recuperacion de contraseñas
  sendRecoveryEmail(email:string){
    return sendPasswordResetEmail(getAuth(),email)
  }


  //Datos en Firebaseee-------------

  //setearDocumento

  //crear nuevo documento, o remplezarlo si ya existe
  setDocument(path: string , data:any) {
    return setDoc(doc(getFirestore(), path), data); 

  }


  //obtener el docjumentoss
  async getDocument(path: string ){
    return (await getDoc(doc(getFirestore(), path))).data(); 


  }

  



}
 