import Inflector from 'ember-inflector';

export function initialize() {
  const inflector = Inflector.inflector;

  inflector.uncountable('customer');
  inflector.irregular('upi-transaction','upi');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};