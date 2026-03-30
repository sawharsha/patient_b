const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    age:{
        type : Number,
        required : true
    },
    disease:{
        type:String,
        required: true
    },

    details:{
        phoneNo:{
            type: Number,
            required: true
        } ,
        address: {
            type: String,
            required : true
        }

    }
})

const patient = mongoose.model("Patient",patientSchema);

module.exports = patient;