import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | references/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:references/index');
    assert.ok(route);
  });
});
