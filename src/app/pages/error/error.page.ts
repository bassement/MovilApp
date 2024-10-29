import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage {
  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Retrocede a la página anterior
  }
}
