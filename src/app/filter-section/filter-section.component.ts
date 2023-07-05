import { Component, Output } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss'],
})
export class FilterSectionComponent {
  // Make this an enum
  sortByMode: string = '';
  
  constructor(private filteringService: FilterService) {}

  onToggleFilter(op: number) {
    if (op == 0) {
      this.filteringService.updateFilteredData({
        seeding: true,
        application: false,
        harvest: false,
      });
    } else if (op == 1) {
      this.filteringService.updateFilteredData({
        seeding: false,
        application: true,
        harvest: false,
      });
    } else if (op == 2) {
      this.filteringService.updateFilteredData({
        seeding: false,
        application: false,
        harvest: true,
      });
    }
  }
  
  onResetFilter() {
    this.filteringService.resetFilteredData();
  }
}
