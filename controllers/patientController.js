const patient = require('../Models/patientModel');
const Patient = require('../Models/patientModel');

exports.getPatient = async(req,res)=>{
    try{
        const patient = await Patient.find();
        res.status(200).json({
        
            data : patient
        })
    }catch(err){
        res.status(500).json({
            err : err.message
        })

    }
}

exports.createPatient = async(req,res)=>{

   try{
    const {name,age,disease,details} = req.body;
    if(!name || !age || !disease || !details?.phoneNo || !details?.address){
        res.status(400).json({
        message:"All fields must required"
        })
    }

    const patient = await Patient.create({
        name,
        age,
        disease,
        details:{
            phoneNo : details.phoneNo,
            address : details. address
        }
    })
    res.status(200).json({
        data:patient,
        message: "patient added sucessfully"
    })
    
    }catch(err){
        res.status(500).json({
            err: err.message
        })

    }

 
}

exports.updatePatient = async(req,res)=>{
    try{
        const putPatient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        if(!putPatient){
            res.json({
                message:"Failed to update patient"
            })

        }
        res.status(200).json({
            data : putPatient,
            message : "Patient updated successfully"
        })

    }catch(err){
        res.status(500).json({
            err: err.message
        })

    }
    
} 

exports.deletePatient = async(req,res)=>{
    try{
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if(!deletedPatient){
            res.json({
                message : "failed delete patient"
            })
        }
        res.status(200).json({
            data : deletedPatient,
            message : "patient deleted successfully"
        })

    }catch(err){
        res.status(500).json({
            err: err.message
        })

    }
}

