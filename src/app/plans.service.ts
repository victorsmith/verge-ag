import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Plan } from './types/Plan';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  url = 'https://run.mocky.io/v3/e4ca79b4-83cd-4dbe-9bca-f9b966b458eb';

  constructor(private http: HttpClient) {}

  getPlans(): Observable<any> {
    return this.http.get(this.url);
  }
}
