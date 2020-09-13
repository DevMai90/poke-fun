import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navigation/nav-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(2);

    await render(hbs`
      {{#navigation/nav-item}}
        About
      {{/navigation/nav-item}}
    `);

    assert.dom('.nav-link').exists();
    assert.dom('.nav-item').hasText('About');
  });
});
