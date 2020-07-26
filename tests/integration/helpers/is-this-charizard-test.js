import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | is-this-charizard', function (hooks) {
  setupRenderingTest(hooks);

  test('It renders correctly for Charizard', async function (assert) {
    this.set('inputValue', 'charizard');

    // Pass in the helper function to the hbs template
    await render(hbs`{{is-this-charizard inputValue}}`);

    // this.element refers to the hbs template that we are rendering. Not necessarily the entire DOM.
    assert.equal(
      this.element.textContent.trim(),
      'ISSA CHARIZARD!!!!!',
      '1st edition WOTC!!'
    );
  });

  test('It renders correctly for non-Charizard', async function (assert) {
    this.set('inputValue', 'LOL');

    await render(hbs`{{is-this-charizard inputValue}}`);

    assert.equal(
      this.element.textContent.trim(),
      'Is not a Charizard...',
      'Boohoo, not a Charizard'
    );
  });
});
