import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state('void', style({ transform: 'translateX(100%)', opacity: 0 })),
  transition(':enter', [
    animate('300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
  ]),
]);


