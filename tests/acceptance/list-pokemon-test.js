import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit'; // Needed for acceptance tests that will interact with the whole application

module('Acceptance | list pokemon', function (hooks) {
  setupApplicationTest(hooks); // Ensures that application is set up and torn down between each test

  test('should show pokemon on homepage', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/digimon', 'should redirect automatically');
  });

  test('should link to info about the page', async function (assert) {
    await visit('/');

    await click('.menu-about');

    assert.equal(currentURL(), '/boogers', 'should navigate to about page');
  });

  test('should link to contact information', async function (assert) {
    await visit('/');

    await click('.menu-contact');

    assert.equal(currentURL(), '/contact', 'should navigate to contact page');
  });

  test('should list Pokemon', async function (assert) {
    await visit('/');

    const pokemonList = this.element.querySelectorAll('.pokemon__container');

    assert.equal(pokemonList.length, 3, 'should list three pokemon');

    pokemonList.forEach((item) => {
      assert.ok(
        item.querySelector('.pokemon__name'),
        'should contain pokemon name'
      );

      assert.ok(
        item.querySelector('.pokemon__id'),
        'should contain pokemon id'
      );

      assert.ok(
        item.querySelector('.pokemon__description'),
        'should contain pokemon description'
      );

      assert.ok(
        item.querySelector('.pokemon__front'),
        'should contain pokemon front view'
      );

      assert.ok(
        item.querySelector('.pokemon__back'),
        'should contain pokemon back view'
      );
    });
  });

  test('should filter Pokemon by type', async function (assert) {});

  test('should show details about selected Pokemon', async function (assert) {});
});
