import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  retrievePokemon: async function() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
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
