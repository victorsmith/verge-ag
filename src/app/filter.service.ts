import { Injectable } from '@angular/core';
import { Plan } from './types/Plan';
import { PlansService } from './plans.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  original: Plan[]
  filteredData: Plan[]

  constructor(private plansService: PlansService) { 
    this.plansService.getPlans().subscribe((data: any) => {
      console.log(data);
      this.original = data.plans;
      this.filteredData = this.original;
    });
  }

  getFilteredData() {
    return this.filteredData;
  }

  updateFilteredData(newFilterValues: any) {
    // logic here
    this.filteredData = this.original;
    if (newFilterValues.seeding) {
      this.filteredData = this.filteredData.filter((plan) => plan.operation == 'seeding');
    } else if (newFilterValues.application) {
      this.filteredData = this.filteredData.filter((plan) => plan.operation == 'application');
    } else if (newFilterValues.harvest) {
      this.filteredData = this.filteredData.filter((plan) => plan.operation == 'harvest');
    }
  }

  resetFilteredData() {
    this.filteredData = this.original;
  }

}
