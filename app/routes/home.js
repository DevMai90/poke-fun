import Route from '@ember/routing/route';
import RSVP from 'rsvp';

/**
 * 802 unique Pokemon as of Gen 7
 * Gen 8 Pokemon in process of being added to API
 * https://github.com/PokeAPI/pokeapi/issues/520
 */
const TOTAL_NUMBER_OF_POKEMON = 802;

export default Route.extend({

  randomPokemonId (totalPokemon) {
    return Math.floor(Math.random() * totalPokemon) +1;
  },

  retrievePokemon: async function() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.randomPokemonId(TOTAL_NUMBER_OF_POKEMON)}`);
    const data = await res.json();

    return data;
  },
  
  model() {
    const randomPokemon = this.retrievePokemon();
    
    return RSVP.hash({
      randomPokemon
    })
  }
});
