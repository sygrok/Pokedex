import { Pipe, PipeTransform } from '@angular/core';
import { Pokelist } from '../models/pokelist';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(pokemons: Pokelist[], searchText: string): Pokelist[] {
    if (!searchText) {
      return pokemons;
    }

    searchText = searchText.toLowerCase();
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchText)
    );
  }
}
