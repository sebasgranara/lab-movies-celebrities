//  Add your code here
const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
  name: { type: String },
  occupation: {
      type:String, enum:["actor","singer","comedian","unknown"]
    },
  catchPhrase:{
      type:String
  }
});

const Celebrity = model ("Celebrity",celebritySchema);

module.exports=Celebrity;