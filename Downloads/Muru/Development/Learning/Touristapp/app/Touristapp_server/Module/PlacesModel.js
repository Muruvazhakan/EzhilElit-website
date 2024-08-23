const mongooes = require("mongoose");

const schema = mongooes.Schema;

const placeSchema = schema({
    title:{ type: String, require:true},
    description: { type:String, require:true},
    imageUrl:{ type:String, require:true},
    address:{ type:String, require:true},
    location:{
        lat:{type:Number, require:true},
        lng:{type:Number, require:true}
    },
    creator :{ type:String, require:true}
});

module.exports = mongooes.model('Place',placeSchema);