import { Component } from '@angular/core';
import { PlansService } from './plans.service';
import { Plan } from './types/Plan';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filteredPlans: Plan[] = [];

  constructor(
    // private plansService: PlansService,
    public filterService: FilterService,
  ) {

  }

  ngOnInit() {
    this.filteredPlans = this.filterService.getFilteredData();
  }


}
