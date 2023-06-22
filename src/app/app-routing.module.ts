import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PokelistDetailComponent } from './components/pokelist-detail/pokelist-detail.component';
import { PokelistAddComponent } from './components/pokelist-add/pokelist-add.component';
import { CategoriesAddComponent } from './components/categories-add/categories-add.component';
import { PokelistUpdateComponent } from './components/pokelist-update/pokelist-update.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:PokelistComponent},
  {path:'pokelist', component:PokelistComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'pokelist/category/:categoryId',component:PokelistComponent},
  {path:'pokelist/:id',component:PokelistDetailComponent},
  {path:'pokelist-add',component:PokelistAddComponent},
  {path:'categories-add', component:CategoriesAddComponent},
  {path:'pokelist-update/:id', component:PokelistUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


