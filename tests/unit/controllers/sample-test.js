import { module, test } from 'qunit';
import { setupTest } from 'bank-app/tests/helpers';

module('Unit | Controller | sample', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:sample');
    assert.ok(controller);
  });
});
