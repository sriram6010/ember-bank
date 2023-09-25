import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class UpiTransactionSerializer extends JSONAPISerializer {

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
   
   payload.type = "upi-transaction";
   //payload.attributes = payload;
   const data = payload.map(transaction =>{
    return {
        type : primaryModelClass.modelName,
        id: transaction.transaction_id,
        attributes: transaction
    }
   })

console.log(data);
return super.normalizeResponse(store,primaryModelClass,{data:data},id,requestType);  
}
keyForAttribute(key) {
    return key;
  }
}