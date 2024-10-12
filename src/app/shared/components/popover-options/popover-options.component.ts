import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-options',
  template: `
    <ion-list>
      <ion-item *ngFor="let option of options" (click)="selectOption(option)">
        {{ option.label }}
      </ion-item>
    </ion-list>
  `,
  styles: [`
    ion-list {
      margin: 0;
    }
    ion-item {
      --padding-start: 15px;
    }
  `]
})
export class PopoverOptionsComponent {
  @Input() options: { label: string, action: () => void }[] = [];

  constructor(private popoverController: PopoverController) {}

  selectOption(option: { label: string, action: () => void }) {
    option.action();
    this.popoverController.dismiss();
  }
}
