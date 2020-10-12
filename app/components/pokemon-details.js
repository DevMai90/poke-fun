import Component from '@ember/component';
import { setProperties } from '@ember/object';

export default Component.extend({
  isWide: false,

  classNames: ['pokemon-details'],

  conditionalClassName: true,

  actions: {
    toggleImageSize() {
      // Toggle property is native to Ember
      this.toggleProperty('isWide');
      this.toggleProperty('conditionalClassName');
    }
  },

  init() {
    this._super(...arguments);

    const { name, forms, game_indices, height, id, species, sprites, types, weight } = this.pokemonAttr;

    setProperties(this, {
      name,
      forms, // TODO - May not be needed
      game_indices,
      height,
      id,
      species,
      sprites,
      types,
      weight
    });
  }
});
