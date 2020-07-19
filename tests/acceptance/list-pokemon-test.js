import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit'; // Needed for acceptance tests that will interact with the whole application

module('Acceptance | list pokemon', function (hooks) {
  setupApplicationTest(hooks); // Ensures that application is set up and torn down between each test

  test('visiting /list-pokemon', async function (assert) {
    // await visit('/list-pokemon');
    visit('/');

    // assert.equal(currentURL(), '/list-pokemon');
    assert.equal(currentURL(), '/');
  });
});
