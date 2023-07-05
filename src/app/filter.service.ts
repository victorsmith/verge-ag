import { Injectable } from '@angular/core';
import { Plan } from './types/Plan';
import { PlansService } from './plans.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  url: string = 'https://run.mocky.io/v3/e4ca79b4-83cd-4dbe-9bca-f9b966b458eb';

  original: Plan[];
  filteredData: Plan[];

  categoryFilterSubject: Subject<string> = new Subject<string>();
  searchFilterSubject: Subject<string> = new Subject<string>();

  constructor(private plansService: PlansService, private http: HttpClient) {
    this.plansService.getPlans().subscribe((data: any) => {
      console.log(data);
      this.original = data.plans;
      this.filteredData = this.original;
    });
  }

  fetchPosts() {
    this.http.get(this.url).subscribe((plans: Plan) => {
      this.original = plans;
    });
  }

  getFilteredData() {
    return this.filteredData;
  }

  updateFilteredData(newFilterValues: any) {
    // logic here
    this.filteredData = this.original;
    if (newFilterValues.seeding) {
      this.filteredData = this.filteredData.filter(
        (plan) => plan.operation == 'seeding'
      );
    } else if (newFilterValues.application) {
      this.filteredData = this.filteredData.filter(
        (plan) => plan.operation == 'application'
      );
    } else if (newFilterValues.harvest) {
      this.filteredData = this.filteredData.filter(
        (plan) => plan.operation == 'harvest'
      );
    }
  }

  resetFilteredData() {
    this.filteredData = this.original;
  }

  // Subject Methods

  getFilterSubjects() {
    return {
      categoryFilterSubject: this.categoryFilterSubject,
      searchFilterSubject: this.searchFilterSubject,
    };
  }

  updateCategoryFilter(category: string) {
    this.categoryFilterSubject.next(category);
  }

  updateSearchFilter(searchTerm: string) {
    this.searchFilterSubject.next(searchTerm);
  }

}
