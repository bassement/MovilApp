import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //copiar y pegar para utilizar el componente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input () title!: string; //pasar parametros a title *!* para no estar inicalizado
  constructor() { }

  @Input() backUrl: string = ''; // Parámetro opcional para la URL de retroceso

  ngOnInit() {}

}
