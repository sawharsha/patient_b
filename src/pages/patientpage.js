import { useState, useEffect } from "react";

import PatientForm from "../components/patientForm";
import PatientList from "../components/patientList";

import { 
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
 } from "../api/patientApi";

 function PatientPage() {
    const [patients, setPatients] = useState([]);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [disease, setDisease] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const[address, setAddress] = useState("");

    const [editingId, setEditingId] = useState(null);

    //Load

    useEffect(()=>{
        loadPatients();
    }, []);

    const loadPatients = async()=>{
        try{
            const data = await getPatient();
            setPatients(data);

        }catch(err){
            console.log(err);

        }
    };

    //clear

    const clearForm = ()=>{
        setName("");
        setAge("");
        setDisease("");
        setPhoneNo("");
        setAddress("");

        setEditingId(null)
    };

    //Add

    const handleAdd = async ()=>{
        if(!name || !age || !disease || !phoneNo || !address){
            alert("All fields must required!");
            return;
        }
        try {
            const res = await createPatient({
                name,
                age,
                disease,
                details:{
                    phoneNo,
                    address
                }
            });
            alert(res.message);

            loadPatients();
            clearForm();
            
        } catch {

            alert("add failed");
        }
    };

    // Edit 

    const handleEdit = (patient) =>{
        setEditingId(patient._id);

        setName(patient.name);
        setAge(patient.age);
        setDisease(patient.disease);
        setPhoneNo(patient.details.phoneNo);
        setAddress(patient.details.address);
    };
    
    const handleUpdate =  async()=>{
        try {
            const res = await updatePatient(editingId,{
                name,
                age,
                disease,
                details:{
                    phoneNo,
                    address
                }
            });
            alert(res.message);

            loadPatients();

            clearForm();

        } catch {
            alert("update failed");
        }
    };

    //delete 
    const handleDelete = async(id)=>{
        if(!window.confirm(("Are you sure want to delete"))){
            return;
        }
        try {
            const res = await deletePatient(id);
            alert(res.message);
            loadPatients();
        } catch {
            alert("delete Failed");
        }
    };

    return (
    <div className="container">

      <h2>
        Patient Management System
      </h2>

      <PatientForm
        name={name}
        age={age}
        disease={disease}
        details={{phoneNo,address}}

        setName={setName}
        setAge={setAge}
        setDisease={setDisease}
        setPhoneNo={setPhoneNo}
        setAddress={setAddress}

        editingId={editingId}

        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onCancel={clearForm}
      />

      <h3>
        Patient List
      </h3>

      <PatientList
        patients={patients}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>

  );
 }

 export default PatientPage;