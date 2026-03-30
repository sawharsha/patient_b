import React from "react";

function PatientForm({
    name,
    age,
    disease,
    details:{
        phoneNo,
        address
    } = {},
    setName,
    setAge,
    setDisease,
    setPhoneNo,
    setAddress,
    editingId,
    onAdd,
    onCancel,
    onUpdate
}) {

    return (

        <div className="form">

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) =>
                    setAge(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Disease"
                value={disease}
                onChange={(e) =>
                    setDisease(e.target.value)
                }
            />
            <input 
            type="number"
            placeholder="Phone"
            value={phoneNo}
            onChange={(e)=>
                setPhoneNo(e.target.value)
            }
            />

            <input 
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e)=>
                setAddress(e.target.value)
            }
            />

            {editingId ? (

                <div className="button-group">

                    <button
                        className="update-btn"
                        onClick={onUpdate}
                    >
                        Update
                    </button>

                    <button
                    className="cancel-btn"
                    onClick={onCancel}
                    >
                        Cancel
                    </button>

                </div>

            ) : (

                <button
                className="add-btn"
                onClick={onAdd}
                >
                    Add Patient
                </button>

            

            )}

        </div>

    );

}

export default PatientForm;