import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, collection, collectionData, query, updateDoc, deleteDoc, addDoc } from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { getStorage, uploadString, ref, getDownloadURL, deleteObject } from 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilSvc = inject(UtilsService);
  storage = inject(AngularFireStorage);


  //------Autenticacion
  getAuth() {
    return getAuth();
  }


  //acceder con usuario creado, autenticacion
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }


  //creacion de usuario----------
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }



  //actualizar Usarioio
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  //recuperacion de contraseñas
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }


  //Datos en Firebaseee-------------

  //setearDocumento

  //funcoin pa setear un documento
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);

  }


  //obtener el docjumentoss
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();


  }

  //obtener documentos de una coleccion
  getCollectionData(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectionQuery), { idField: 'id' });
  }

  //actualizar un documento
  updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }

  //funcion para agregar un documento
  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }


  //funcion cerrar sesion
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilSvc.routerLink('/auth');
  }

  // fuincion para subir una imagen
  async uploadImage(path: string, data_url: string) {
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(
      () => {
        return getDownloadURL(ref(getStorage(), path));
      }
    );
  }

  //funcion para obtener ruta de la imagen con url para reemplazar la img ya existente
  async getFilePath(url: string) {
    return ref(getStorage(), url).fullPath;
  }

  //Eliminar el archgivo de firestorage
  deleteFile(path: string) {
    return deleteObject(ref(getStorage(), path));
  }


}
