import { Component, inject, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverOptionsComponent } from '../popover-options/popover-options.component';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() backUrl: string = '';
  @Input() options: { label: string, action: () => void }[] = []; // Las opciones para el popover
  @Input() blackbutton!: string;
  @Input() isModal !: boolean;
  @Input() showMenu !: boolean;

  utilsSvc = inject(UtilsService);

  constructor(private popoverController: PopoverController) { }

  ngOnInit() { }

  async openOptions(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverOptionsComponent, // Utilizamos un componente para el contenido del popover
      event: ev,
      translucent: true,
      cssClass: 'custom-popover',
      componentProps: {
        options: this.options // Pasamos las opciones como props
      }
    });
    return await popover.present();
  }
}
