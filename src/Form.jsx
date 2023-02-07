import React from "react"


function Form(){
    return(
        <div className="frm">
            <h1>Registretion Form</h1>
            <label htmlFor="" className="lbl">First Name: </label>
            <input type="text" /> <br /><br />
            <label htmlFor="">Last Name:</label>
            <input type="text" /> <br /><br />
            <label htmlFor="">Mobile:</label>
            <input type="number" /> <br /><br />
            <label htmlFor="">DOB:</label>
            <input type="date" /> <br /><br />
            <label htmlFor="">Uplad Photo:</label>
            <input type="file" /> <br /><br />
            <label htmlFor="">Email ID:</label>
            <input type="email" /> <br /><br />
            <label htmlFor="">Adress:</label>
            <input type="text" /> <br /><br />
            <label htmlFor="">Pincode:</label>
            <input type="number" /> <br /><br />
            <label htmlFor="">City:</label>
            <input type="text" /> <br /><br />
            <label htmlFor="">State:</label>
            <input type="text" /> <br /><br /> <br />
            <input type="submit" />
        </div>
    )
}
export default Form