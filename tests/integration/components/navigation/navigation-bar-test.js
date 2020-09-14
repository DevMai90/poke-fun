import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navigation/navigation-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{navigation/navigation-bar}}`);

    assert.dom('.navbar').exists();
    assert.dom('.navbar-brand').exists();
    assert.equal(
      findAll('.nav-link').length,
      7,
      'Correct number of nav items is rendered'
    );
  });
});
