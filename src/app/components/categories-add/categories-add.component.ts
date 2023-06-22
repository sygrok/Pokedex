import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { PokelistService } from 'src/app/services/pokelist.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private categoriesService:CategoriesService, private pokelistService:PokelistService) { }

  categoriesAddForm!: FormGroup

  ngOnInit(): void {
    this.addCategories()
  }

  addCategories(){
    this.categoriesAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required]
    })
  }

  add(){
    this.categoriesService.add(this.categoriesAddForm.value).subscribe(()=> location.reload)
    this.pokelistService.showSuccessMessage("Category Added")
    setTimeout(() => {
      window.location.reload();
      window.location.replace('');
    }, 1200);
  }

  

}
