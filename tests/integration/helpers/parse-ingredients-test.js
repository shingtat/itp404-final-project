import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | parse-ingredients', function(hooks) {
  setupRenderingTest(hooks);

  test('empty string gives us 0 list elements', async function(assert) {
    this.set('inputValue', '');
    await render(hbs`{{parse-ingredients inputValue}}`);
    assert.equal(this.element.firstChild.childNodes.length, '0');
  });

  test('1 item without comma gives us 1 list element', async function(assert) {
    this.set('inputValue', 'eggs');
    await render(hbs`{{parse-ingredients inputValue}}`);
    assert.equal(this.element.firstChild.childNodes.length, '1');
  });

  test('4 items gives 4 list elements', async function(assert) {
    this.set('inputValue', 'eggs, cilantro, onion, garlic');
    await render(hbs`{{parse-ingredients inputValue}}`);
    assert.equal(this.element.firstChild.childNodes.length, '4');
  });
});
