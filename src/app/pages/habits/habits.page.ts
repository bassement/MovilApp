import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],
})
export class HabitsPage {
  constructor(private actionSheetCtrl: ActionSheetController) { }

  async openOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona una opción',
      buttons: [
        {
          text: 'Agua',
          handler: () => {
            console.log('Seleccionado: Agua');
            // Aquí puedes agregar la lógica para el hábito de agua
          },
        },
        {
          text: 'Sueño',
          handler: () => {
            console.log('Seleccionado: Sueño');
            // Aquí puedes agregar la lógica para el hábito de sueño
          },
        },
        {
          text: 'Ejercicio',
          handler: () => {
            console.log('Seleccionado: Ejercicio');
            // Aquí puedes agregar la lógica para el hábito de ejercicio
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
