import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | like-button', function(hooks) {
  setupRenderingTest(hooks);

  test('like is filled when like is true', async function(assert) {
     this.set('likeTest', true);
     await render(hbs`{{like-button like=likeTest}}`);
     assert.equal(this.element.querySelector('img').getAttribute('src'), '/assets/images/like-filled.png');
  });

  test('like is not filled when like is false', async function(assert) {
     this.set('likeTest', false);
     await render(hbs`{{like-button like=likeTest}}`);
     assert.equal(this.element.querySelector('img').getAttribute('src'), '/assets/images/like-transparent.png');
  });
});
