import { module, test } from 'qunit';
import { setupTest } from 'bank-app/tests/helpers';

module('Unit | Service | create-customer', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:create-customer');
    assert.ok(service);
  });
});
