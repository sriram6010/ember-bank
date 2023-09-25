import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class CustomerSerializer extends JSONAPISerializer {

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
   payload.id = payload.customer_id.toString();
   payload.type = "customer";
   payload.attributes = payload;
   const data = {
    data: payload
   }

console.log(data);
return super.normalizeResponse(store,primaryModelClass,data,id,requestType);  
}
keyForAttribute(key) {
    return key;
  }
}