import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/models/categories';
import { Pokelist } from 'src/app/models/pokelist';
import { CategoriesService } from 'src/app/services/categories.service';
import { PokelistService } from 'src/app/services/pokelist.service';

@Component({
  selector: 'app-pokelist-add',
  templateUrl: './pokelist-add.component.html',
  styleUrls: ['./pokelist-add.component.css']
})
export class PokelistAddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private pokelistService:PokelistService, 
  private categoriesService:CategoriesService) { }

  pokemonAddForm!:FormGroup;
  pokemons: Pokelist[]=[]
  categories:Categories[]=[]

  ngOnInit(): void {
    this.addPokemonForm()
    this.getCategories()
  }

  addPokemonForm(){
    this.pokemonAddForm=this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: ['', Validators.required],
      picture: ['', Validators.required]
    })
  }

  add(){
    if(this.pokemonAddForm.value){
      let pokeData = Object.assign({}, this.pokemonAddForm.value);
      this.pokelistService.add(pokeData).subscribe((data) => {
        this.pokelistService.showSuccessMessage("Pokemon Added")

        setTimeout(() => {
          window.location.reload();
          window.location.replace('');
        }, 1200);
  

      })
      
    }
    
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe((data)=> {this.categories = data})
  }

  
}

