import Component from '@ember/component';
import { setProperties, computed } from '@ember/object';
import capitalizePokemon from '../helpers/capitalize-pokemon';

export default Component.extend({
  isWide: false,

  classNames: ['pokemon-details'],

  conditionalClassName: true,

  name: computed('pokemonAttr.name', function() {
    const { name } = this.get('pokemonAttr');

    return capitalizePokemon(name);
  }),

  // TODO - Link to games
  appearances: computed('pokemonAttr.game_indices', function() {
    const games = this.get('pokemonAttr.game_indices').map((game) => {
      return capitalizePokemon(game.version.name);
    });

    if (!games.length) {
      return 'None'
    } 

    if (games.length === 2) {
      return `${games[0]} and ${games[1]}`;
    }

    let results = '';

    games.forEach((game, index) => {
      if (index === games.length - 1) {
        results += `and ${game}`;
      } else {
        results += `${game}, `
      }
    })

    return results;
  }),

  init() {
    this._super(...arguments);

    const { forms, height, id, species, sprites, types, weight } = this.get('pokemonAttr');

    setProperties(this, {
      forms, // TODO - May not be needed
      height,
      id,
      species,
      sprites,
      types,
      weight
    });
  },

  actions: {
    toggleImageSize() {
      // Toggle property is native to Ember
      this.toggleProperty('isWide');
      this.toggleProperty('conditionalClassName');
    }
  }
});
