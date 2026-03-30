import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;

export const getPatient = async()=>{
    const res = await axios.get(API_URI);
    return res.data.data;
}

export const createPatient = async(patientData)=>{
    const res = await axios.post(
        API_URI,
        patientData
    );

    return res.data;
}

export const updatePatient = async(id, patientData)=>{
    const res = await axios.put(
        `${API_URI}/${id}`,
        patientData
    );

    return res.data;
}

export const deletePatient = async(id)=>{
    const res = await axios.delete(
        `${API_URI}/${id}`
    );
    return res.data;
}