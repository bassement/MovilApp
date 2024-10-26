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

  saveData() {
    console.log('Datos guardados:', this.userData);
    // Agregar lógica adicional para guardar en Firebase o manejar los datos según tu necesidad
  }
}
