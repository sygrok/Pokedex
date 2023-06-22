import { Pokelist } from './../../models/pokelist';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, take } from 'rxjs';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { PokelistService } from 'src/app/services/pokelist.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  constructor(private pokelistService:PokelistService, private categoriesService:CategoriesService,private activatedRoute:ActivatedRoute) { }
  pokemons:Pokelist[]=[]
  filter:Pokelist[]=[]
  searchText: string = ''
  categories:Categories[]=[]

  showScrollTop: boolean = false;
  scrollTopOffset: number = 300;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{this.getPokemons()})
    this.getCategories()

    window.addEventListener('scroll', this.onWindowScroll.bind(this), true);
  }
  

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll.bind(this), true);
  }
  
  onWindowScroll() {
    if (window.pageYOffset > this.scrollTopOffset) {
      this.showScrollTop = true;
    } else {
      this.showScrollTop = false;
    }
  }
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }




  getPokemons() {
    this.pokelistService.getPokemons().pipe(
      map((data: Pokelist[]) => data.map(pokemon => {
        const slicedName = pokemon.description.slice(0, 55);
        const formattedName = slicedName.length < pokemon.description.length ? slicedName + '...' : slicedName;
        return { ...pokemon, description: formattedName };
      }))
    ).subscribe((filteredPokemons: Pokelist[]) => {
      this.pokemons = filteredPokemons;
      this.filterPokemons();
    });
  }
  getCategories(){
    this.categoriesService.getCategories().subscribe((data)=> (this.categories=data))
  }
  
  


  getPokemonsByCategory(categoryId){
    this.pokelistService.getPokemonsByCategory(categoryId).subscribe((data)=>(this.pokemons = data))
  }

  clickDetail(id){
    window.location.reload();
    window.location.replace('pokelist/' + id);
  }

  filterPokemons(){
    this.filter = this.pokelistService.filterPokemonsByName(this.pokemons, this.searchText)
  }


  

}
