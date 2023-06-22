import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { Pokelist } from '../models/pokelist';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokelistService {

  constructor(private httpClient:HttpClient) { }

  path:string = "http://localhost:3000/pokelist"
  queryPath:string=""
  selectedCategory:Categories


  createApiUrl() {
    if (this.selectedCategory) {
      this.queryPath = `${this.path}?categoryId=${this.selectedCategory.id}`;
    } else {
      this.queryPath = this.path;
    }
  
    return this.queryPath;
  }

  

  getPokemons(){
    return this.httpClient.get<Pokelist[]>(this.createApiUrl())
  }

  getPokemonsById(id){
    return this.httpClient.get<Pokelist>(this.path + "/" + id)
  }

  getPokemonsByCategory(categoryId){
    return this.httpClient.get<Pokelist[]>(this.path+"?categoryId="+categoryId)
  }

  setSelectedCategory(category){
    this.selectedCategory = category
  }

  add(data : Pokelist){
    return this.httpClient.post<Pokelist>(this.path, data)
  }

  delete(data: any){
    return this.httpClient.delete<Pokelist>(this.path + "/" + data.id)
  }

  update(id:number, data:Pokelist){
    return this.httpClient.put<Pokelist>(this.path + "/" + id, data)
  }

  //Created to fix conflict
  getPokemonsDetail(id:number){
    return this.httpClient.get<Pokelist[]>(this.path + "?id=" +id)
  }

  filterPokemonsByName(pokemons: Pokelist[], searchText: string): Pokelist[] {
    if (!searchText) {
      return pokemons;
    }
  
    searchText = searchText.toLowerCase();
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchText)
    );
  }

  showSuccessMessage(data:string) {
    const toast = document.createElement('div');
    toast.innerText =  data;
    toast.style.position = 'fixed';
    toast.style.top = '10px';
    toast.style.right = '10px';
    toast.style.backgroundColor = 'green';
    toast.style.color = 'white';
    toast.style.padding = '10px';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '9999';
    toast.style.fontFamily = 'Arial, sans-serif';
    toast.style.fontSize = '16px';
    toast.style.fontWeight = 'bold';
    toast.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    toast.style.transition = 'opacity 0.3s ease';
    toast.style.opacity = '1';
  
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.pointerEvents = 'none';
      setTimeout(() => {
        toast.remove();
      }, 2000);
    }, 2000);
  }
}
