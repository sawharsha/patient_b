function PatientItem({
    patient,
    onEdit,
    onDelete
}) {
    return(
        <li className="patient-card">
            <div>
                <strong>
                    {patient.name}
                </strong>
                <p>
                    Age : {patient.age}
                </p>
                <p>
                    Disease : {patient.disease}
                </p>
                <p>Details </p>
                <div>
                    <p style={{marginLeft:"15px"}}>
                            PhoneNo : {patient.details.phoneNo}
                    </p>
                    <p style={{marginLeft:"15px"}}>
                            Address : {patient.details.address}
                    </p>
                    
                </div>
            </div>
            <div className="card-buttons">
                <button 
                className="edit-btn"
                onClick={()=>
                    onEdit(patient)
                }
                >
                    Edit
                </button>
                <button
                className="delete-btn"
                onClick={()=>
                    onDelete(patient._id)
                }
                >
                    Delete
                </button>


            </div>
        </li>
    );
}

export default PatientItem;