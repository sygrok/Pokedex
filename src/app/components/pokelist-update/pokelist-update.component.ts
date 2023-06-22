import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/models/categories';
import { Pokelist } from 'src/app/models/pokelist';
import { CategoriesService } from 'src/app/services/categories.service';
import { PokelistService } from 'src/app/services/pokelist.service';

@Component({
  selector: 'app-pokelist-update',
  templateUrl: './pokelist-update.component.html',
  styleUrls: ['./pokelist-update.component.css']
})
export class PokelistUpdateComponent implements OnInit {

  constructor(private pokelistService:PokelistService, private formBuilder:FormBuilder, 
  private activatedRoute:ActivatedRoute, private categoriesService:CategoriesService, ) { }

  pokelistUpdateForm: FormGroup
  pokemons: Pokelist[]=[]
  pokemon: Pokelist;
  categories: Categories[]=[]

  ngOnInit(): void {
    this.getCategories()
    this.pokemonUpdateForm();
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe((data)=> {this.categories = data;
    this.activatedRoute.params.subscribe((params)=> this.getPokemonsById(params["id"]))
    })
  }

  getPokemonsById(id:number){
    this.pokelistService.getPokemonsDetail(id).subscribe((data) => {
      this.pokemons = data
      this.pokemonUpdateForm()
    })
      
    
  }

  // pokemonUpdateForm(){
  //   this.pokelistUpdateForm = this.formBuilder.group({
  //     name:[this.pokemons[0].name, Validators.required],
  //     category:[this.pokemons[0].category, Validators.required],
  //     categoryId:[this.pokemons[0].categoryId, Validators.required],
  //     description:[this.pokemons[0].description, Validators.required],
  //     picture:[this.pokemons[0].picture, Validators.required],
  //   })
  // }

  pokemonUpdateForm() {
    if (this.pokemons.length > 0) {
      this.pokelistUpdateForm = this.formBuilder.group({
        name: [this.pokemons[0].name, Validators.required],
        category: [this.pokemons[0].category, Validators.required],
        categoryId: [this.pokemons[0].categoryId, Validators.required],
        description: [this.pokemons[0].description, Validators.required],
        picture: [this.pokemons[0].picture, Validators.required],
      });
    }
  }
  

  update():void{
    this.pokelistService.update(this.activatedRoute.snapshot.params["id"], this.pokelistUpdateForm.value).subscribe();
    this.pokelistService.showSuccessMessage("Pokemon Updated")
    setTimeout(() => {
      window.location.reload();
      window.location.replace('');
    }, 1200);
  }

}
