import { Component, Output } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss'],
})
export class FilterSectionComponent {
  category = ''
  textSearch = ''

  constructor(private filteringService: FilterService) {}

  updateFilter(currentCategory = this.category, currentTextSearch = this.textSearch) {
    console.log("updateFilter", currentCategory, currentTextSearch);
    this.filteringService.updateFilter({category: currentCategory, text: currentTextSearch});
  }

  setCategory(category: string) {
    this.category = category;
    console.log("setCategory", this.category);
    this.updateFilter();
  }

  setTextSearch() {
    console.log("setTextSearch", this.textSearch);
    this.updateFilter();
  }


  onResetFilter() {
    this.category = '';
    this.textSearch = '';
    this.updateFilter();
  }

  // onToggleFilter(op: number) {
  //   if (op == 0) {
  //     this.filteringService.updateFilteredData({
  //       seeding: true,
  //       application: false,
  //       harvest: false,
  //     });
  //   } else if (op == 1) {
  //     this.filteringService.updateFilteredData({
  //       seeding: false,
  //       application: true,
  //       harvest: false,
  //     });
  //   } else if (op == 2) {
  //     this.filteringService.updateFilteredData({
  //       seeding: false,
  //       application: false,
  //       harvest: true,
  //     });
  //   }
  // }
  
  // onResetFilter() {
  //   this.filteringService.resetFilteredData();
  // }
}
