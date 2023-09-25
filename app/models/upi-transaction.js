import Model, { hasMany,attr } from '@ember-data/model';

export default class UpiTransactionModel extends Model {
 @attr('number') transaction_id;
  @attr('string') sender;
  @attr('string') receiver;
  @attr('number') amount;
  @attr('string') transaction_type;
  @attr('string') transaction_status;
  @attr('string') remarks;
  @attr('number') reference_id; 

}
