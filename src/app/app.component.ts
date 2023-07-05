import { Component } from '@angular/core';
import { PlansService } from './plans.service';
import { Plan } from './types/Plan';
import { FilterService } from './filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filterSubscription: Subscription;
  originalPlans: Plan[] = [];
  filteredPlans: Plan[] = [];

  constructor(
    private plansService: PlansService,
    public filterService: FilterService,
  ) {}

  ngOnInit() {
    this.plansService.getPlans().subscribe(({ plans }) => {
      this.originalPlans = plans;
      this.filteredPlans = plans;
    });

    this.filterSubscription = this.filterService.filterSubject.subscribe(
      ({text, category}) => {
        console.log("filterSubscription (appComp)", text, category)
        this.filteredPlans = this.filterService.filterData(this.originalPlans, text, category)
        console.log("filteredPlans", this.filteredPlans)
      }
    );
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
}
