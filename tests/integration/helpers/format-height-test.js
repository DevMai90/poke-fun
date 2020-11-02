import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-height', function(hooks) {
  setupRenderingTest(hooks);

  test('it returns the correct feet/inches format', async function(assert) {
    this.set('inputValue', 17);

    await render(hbs`{{format-height inputValue}}`);

    assert.equal(this.element.textContent.trim(), '5\' 7"');
  });

  test('it returns the correct height if the pokemon is less than 1 feet tall', async function(assert) {
    this.set('inputValue', 3);

    await render(hbs`{{format-height inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1\' 0"', 'Height is rounded to 1 feet');

    this.set('inputValue', 2);

    await render(hbs`{{format-height inputValue}}`);

    assert.equal(this.element.textContent.trim(), '0\' 8"', 'Height is rendered if less than 1 feet');
  });
});
