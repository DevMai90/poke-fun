import { module, test } from 'qunit';
import capitalizePokemon from '../../../helpers/capitalize-pokemon';

module('Unit | Helper | capitalize-pokemon', {
  beforeEach() {
    const pokemonName = 'Charizard';

    this.expectedValue = pokemonName;
  }
});


test('It capitalizes the first letter', function(assert) {
  const result = capitalizePokemon('charizard');

  assert.equal(this.expectedValue, result, 'It renders the correct name');
})

test('It renders with a number passed in', function(assert) {
  this.expectedValue = '1charizard'
  const result = capitalizePokemon('1charizard');

  assert.equal(this.expectedValue, result, 'It renders the correct name with number');
})