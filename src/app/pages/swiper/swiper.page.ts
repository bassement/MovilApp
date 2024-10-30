import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage {
  userData = {
    age: null,
    gender: '',
    weight: null,
    height: null,
  };

  constructor(private router: Router) { }

  navigateToHabits() {
    this.router.navigateByUrl('/main/habits');
  }

  /* Ahora no esta éro es para que funcione el metodo de guardar las preguntas en un futuro swiper para dejar la informaicon del usuarlio en firebase
  saveData() {
    console.log('Datos guardados:', this.userData);
    // Agregar lógica adicional para guardar en Firebase o manejar los datos según tu necesidad
  }
  */
}