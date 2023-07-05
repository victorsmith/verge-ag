import { Injectable } from '@angular/core';
import { Plan } from './types/Plan';
import { PlansService } from './plans.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  original: any;
  filteredData: Plan[] = [];

  filterSubject: Subject<{ text: string; category: string }> = new Subject<{
    text: string;
    category: string;
  }>();

  constructor(private plansService: PlansService, private http: HttpClient) {
    this.plansService.getPlans().subscribe(({ plans }) => {
      console.log(plans);
      this.original = plans;
      this.filteredData = this.original;
    });
  }

  getFilteredData() {
    return this.filteredData;
  }

  filterData(data: any, text: string, category: string) {
    let filteredData = data;
    if (category) {
      filteredData = filteredData.filter(
        (plan: Plan) => plan.operation == category
      );
    }
    if (text) {
      filteredData = filteredData.filter(
        (plan: Plan) =>
          // only checking gorwer, farm, and operation
          // for now to keep it simple
          plan.grower.toLowerCase().includes(text.toLowerCase()) ||
          plan.farm.toLowerCase().includes(text.toLowerCase()) ||
          plan.operation.toLowerCase().includes(text.toLowerCase())
      );
    }
    return filteredData;
  }

  resetFilteredData() {
    this.filteredData = this.original;
  }

  getFilterSubject() {
    return this.filterSubject;
  }

  updateFilter(filterObject: { text: string; category: string }) {
    this.filterSubject.next(filterObject);
  }
}
