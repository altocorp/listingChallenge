import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './page1/items/items.component';
import { LanguagesComponent } from './page1/items/languages/languages.component';
import { ToolsComponent } from './page1/items/tools/tools.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltersComponent } from './page1/filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ItemsComponent,
    LanguagesComponent,
    ToolsComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
