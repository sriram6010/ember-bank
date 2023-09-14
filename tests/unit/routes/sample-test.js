import { module, test } from 'qunit';
import { setupTest } from 'bank-app/tests/helpers';

module('Unit | Route | sample', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sample');
    assert.ok(route);
  });
});
