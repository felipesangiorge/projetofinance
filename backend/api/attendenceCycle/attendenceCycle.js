const restful = require ('node-restful')
const mongoose = restful.mongoose

const attendenceCycleSchema = new mongoose.Schema({
  name:{type: String, required: true},
  mail:{type: String, required: false},
  phone:{type : Number,min: 0, required: true},
  description: {type: String, required: true},
  status:{type: String, required: false, uppercase:true,
   enum :['AGENDADO','PENDENTE','CANCELADO','CONCLUIDO']}

})

module.exports = restful.model('attendenceCycle',attendenceCycleSchema)
