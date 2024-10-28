import { Component } from '@angular/core';

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

  constructor() { }

  /* Ahora no esta éro es para que funcione el metodo de guardar las preguntas en un futuro swiper para dejar la informaicon del usuarlio en firebase
  saveData() {
    console.log('Datos guardados:', this.userData);
    // Agregar lógica adicional para guardar en Firebase o manejar los datos según tu necesidad
  }
  */
}
