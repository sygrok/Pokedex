import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokelistDetailComponent } from './components/pokelist-detail/pokelist-detail.component';
import { PokelistAddComponent } from './components/pokelist-add/pokelist-add.component';
import { CategoriesAddComponent } from './components/categories-add/categories-add.component';
import { PokelistUpdateComponent } from './components/pokelist-update/pokelist-update.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    CategoriesComponent,
    NavbarComponent,
    FooterComponent,
    PokelistDetailComponent,
    PokelistAddComponent,
    CategoriesAddComponent,
    PokelistUpdateComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
