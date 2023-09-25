import Model, { hasMany,attr } from '@ember-data/model';

export default class CustomerModel extends Model {
 @attr('string') name;
  @attr('number') customer_id;
  @attr('string') email;
  @attr('string') address;

  @attr accounts;
}
