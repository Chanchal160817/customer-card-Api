const mongoose = require ('mongoose');
const ObjectID=mongoose.Schema.Types.ObjectID
const cartSchema = new mongoose.Schema({

"cardNumber": {
    type:String},
"cardType": { 
    type:String},
"customerName": {
    type:String},
"status": {
    type:String ,
    Default: ACTIVE},
"vision": {
    type:String},
"customerID":{
    type:ObjectID,
    ref:Customer}
},{timestamps: true})

module.exports = mongoose.model("CardDetail", cartSchema)