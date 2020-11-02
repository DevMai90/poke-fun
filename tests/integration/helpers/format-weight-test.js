import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-weight', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the converted weight', async function(assert) {
    this.set('inputValue', 200);

    await render(hbs`{{format-weight inputValue}}`);

    assert.equal(this.element.textContent.trim(), '44.09 pounds', 'Renders the correct weight in pounds');
  });
});
