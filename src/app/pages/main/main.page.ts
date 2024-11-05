import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages = [
    {
      title: 'Inicio',
      url: 'main/habits',
      icon: 'home',
    },
    {
      title: 'Perfil',
      url: '/main/profile',
      icon: 'person',
    },

  ];

  router = inject(Router);
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  currentPath: string = '';


  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event?.url) this.currentPath = event.url;
    });
  }
  // ======= Obtener usuario ========
  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  // ==== Cerrar sesion ===
  signOut() {
    this.firebaseSvc.signOut();
  }
}
