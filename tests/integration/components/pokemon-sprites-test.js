import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pokemon-sprites', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.sprites = {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
    };
    this.name = "Ditto";

    await render(hbs`{{
      pokemon-sprites
      sprites=sprites
      name=name
    }}`);

    assert.dom('[data-test-pokemon-sprite-front]').exists('Pokemon front sprite is rendered');
    assert.dom('[data-test-pokemon-sprite-back]').exists('Pokemon rear sprite is rendered');
    assert.dom('[data-test-pokemon-sprite-front] img').hasAttribute('alt', 'Front view of Ditto');
    assert.dom('[data-test-pokemon-sprite-back] img').hasAttribute('alt', 'Back view of Ditto');
  });

  test('it renders with only front sprite', async function(assert) {
    this.sprites = {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    };
    this.name = 'Ditto';

    await render(hbs`{{
      pokemon-sprites
      sprites=sprites
      name=name
    }}`);

    assert.dom('[data-test-pokemon-sprite-front]').exists('Pokemon front sprite is rendered');
    assert.dom('[data-test-pokemon-sprite-back]').doesNotExist('Pokemon rear sprite is not rendered');
  });
});
