import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { reset } from 'ember-window-mock';

module('Acceptance | recipes', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function() {
    reset();
  });

/*
the inbox displays starred and unstarred emails

verify that "liking" a recipe will show on "like" route

viewing a single recipe (GET request)
  Verify that all of the recipe attributes were rendered.

deleting a single recipe (Delete request)
   that when the trash icon is clicked, the number of recipes back on index page is 0 and the current URL is /.

creating a recipe (Post request)
  Seed Mirage with 0 recipe. Verify that when a user fills out the new recipe form and clicks the submit button,
  the number of recipe in the index page is 1.
  Verify that the current URL is /.
  Verify that all of the data was sent to the server by inspecting Mirage’s server.db.recipes[0].

editing a recipe (Patch request)
  verify that field is new field is updated

*/


  test('liked recipes shows on liked route', async function(assert) {
    server.create('recipe', { like: 'true'});
    server.create('recipe', { like: 'true'});
    server.create('recipe', { like: 'true'});
    server.create('recipe', { like: 'true'});
    server.create('recipe', { like: 'true'});

    await visit('/liked');

    assert.dom('[data-test="liked-test"]').exists({ count: 5 });
  });

  test('viewing a single recipe', async function(assert) {
    server.create('recipe',{
       creator: 'Aunty May',
       country: 'Vietnam',
       title: 'Chicken Pho',
       ingredients: 'Egg, Noodles, Cilantro, Onion',
       steps: '1,2,3, testing',
       image: '/assets/images/pho.jpg',
       like: 'false'
    });

    await visit('/recipes/1');

    assert.dom('[data-test="recipe-id"]').hasText('Recipe ID: 1');
    assert.dom('[data-test="recipe-country"]').hasText('Country: Vietnam');
    assert.dom('[data-test="recipe-title"]').hasText('Title: Chicken Pho');
    assert.dom('[data-test="recipe-steps"]').hasText('Steps: 1,2,3, testing');
  });

  test('deleting a email', async function(assert) {
    server.create('recipe',{
       creator: 'Aunty May',
       country: 'Vietnam',
       title: 'Chicken Pho',
       ingredients: 'Egg, Noodles, Cilantro, Onion',
       steps: '1,2,3, testing',
       image: '/assets/images/pho.jpg',
       like: 'false'
    });

    await visit('/recipes/1');
    await click('[data-test="delete-recipe"]');

    assert.equal(currentURL(), '/');

    assert.dom('[data-test="liked-test"]').exists({ count: 0 });
  });

  test('creating a recipe', async function(assert) {
    await visit('/recipes/new');
    await fillIn('#creator', 'Aunty May');
    await fillIn('#country', 'Vietnam');
    await fillIn('#title', 'Chicken Pho');
    await fillIn('#ingredients', 'Egg, Noodles, Cilantro, Onion');
    await fillIn('#steps', '1,2,3, testing');
    await fillIn('#image', '/assets/images/pho.jpg');
    await click('[data-test="publish"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="liked-test"]').exists({ count: 1 });

    assert.equal( server.db.recipes[0].creator, 'Aunty May');
    assert.equal( server.db.recipes[0].country, 'Vietnam');
    assert.equal( server.db.recipes[0].title, 'Chicken Pho');
    assert.equal( server.db.recipes[0].ingredients, 'Egg, Noodles, Cilantro, Onion');
    assert.equal( server.db.recipes[0].steps, '1,2,3, testing');
    assert.equal( server.db.recipes[0].image, '/assets/images/pho.jpg');

  });

  test('editing a recipe', async function(assert) {
    server.create('recipe',{
       creator: 'Aunty May',
       country: 'Vietnam',
       title: 'Chicken Pho',
       ingredients: 'Egg, Noodles, Cilantro, Onion',
       steps: '1,2,3, testing',
       image: '/assets/images/pho.jpg',
       like: 'false'
    });
    await visit('/recipes/1/edit');
    await fillIn('#country', 'China');
    await click('[data-test="publish"]');
    assert.equal( server.db.recipes[0].country, 'China');
  });

});
