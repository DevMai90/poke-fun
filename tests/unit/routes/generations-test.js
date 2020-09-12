import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | generations', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:generations');
    assert.ok(route);
  });
});
