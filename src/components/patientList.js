import PatientItem from "./patientItem";

function PatientList({
    patients,
    onEdit,
    onDelete
}) {
    return(
        <ul className="patient-list">
            {patients.map((patient)=>(
                <PatientItem
                key={patient._id}
                patient={patient}
                onEdit={onEdit}
                onDelete={onDelete}
                />
            ))}

            

        </ul>
    );
}

export default PatientList;