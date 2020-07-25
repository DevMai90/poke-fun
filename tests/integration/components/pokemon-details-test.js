import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pokemon-details', function (hooks) {
  setupRenderingTest(hooks);

  // Make sure to use the function declaration method because we are using 'this'
  hooks.beforeEach(function () {
    // This is the data that normally would have been populated from the pokemon routes JS file
    this.pokemon = {
      name: 'Missingno',
      id: 0,
      version_group: {
        name: 'OG POKEMON'
      },
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/54.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png',
        front_shiny_female: null
      }
    };
  });

  test('Should display pokemon details', async function (assert) {
    // Render the actual component
    await render(
      // Note the backticks
      hbs`{{pokemon-details pokemonAttr=pokemon}}`
    );

    // await render(hbs`<PokemonDetails @pokemonAttr={{this.pokemon}} />`);

    assert.equal(
      this.element.querySelector('.pokemon__name').textContent.trim(),
      'Missingno',
      'name: Missingno'
    );

    assert.ok(find('.pokemon__id'), 'Pokemon id exists');
    assert.ok(find('.pokemon__description'), 'Pokemon description exists');
    assert.ok(find('.pokemon__front'), 'Pokemon front image exists');
    assert.ok(find('.pokemon__back'), 'Pokemon back image exists');
  });

  test('Should toggle wide class on click', async function (assert) {
    // Looks like we can pass in the pokemonAttr with or without 'this'
    await render(hbs`{{pokemon-details pokemonAttr=this.pokemon}}`);

    assert.notOk(find('.wide'), '.wide class is not true by default');

    await click('.image');

    assert.ok('.wide', '.wide class is true after clicking');
  });

  test('Should toggle "conditional class name test" on click', async function (assert) {
    await render(hbs`{{pokemon-details pokemonAttr=this.pokemon}}`);

    assert.ok(
      find('.conditional.class.name.test'),
      'Class names are available by default'
    );

    await click('.image');

    assert.notOk(
      find('.conditional.class.name.test'),
      'Class names do not exist'
    );
  });
});
