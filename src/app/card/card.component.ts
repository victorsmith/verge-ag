import { Component, Input } from '@angular/core';

import { Plan } from '../types/Plan';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() plan: Plan;

  constructor() {}


}
