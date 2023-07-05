import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardComponent } from './card/card.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { PlansService } from './plans.service';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [PlansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
