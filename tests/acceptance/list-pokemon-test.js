import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit'; // Needed for acceptance tests that will interact with the whole application

module('Acceptance | list pokemon', function (hooks) {
  setupApplicationTest(hooks); // Ensures that application is set up and torn down between each test

  test('should show pokemon on homepage', async function (assert) {});

  test('should link to info about the page', async function (assert) {});

  test('should link to contact information', function (assert) {});

  test('should list Pokemon', function (assert) {}); // By type?

  test('should filter Pokemon by type', function (assert) {});

  test('should show details about selected Pokemon', function (assert) {});
});
