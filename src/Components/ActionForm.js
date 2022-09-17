import React,{useState} from "react";
import './Styles/ActionForm.css';
import axios from "axios";

const MailingForm = ()=>{
    const [sent, setSent] = useState(2)
    const [givenName, setGivenName] = useState("")
    const [surName, setSurName] = useState("")
    const [email,setEmail] = useState("")
    const [contact,setContact] = useState("")
    const [titleOfAssignment,setTitleOfAssignment] = useState("")
    const [description,setDescription] =useState("")
    const [deadline,setDeadline] = useState("")


    const handleSend = async(event)=>{
        event.preventDefault();
        setSent(1)
        try{
            await axios.post("https://pace-akash.herokuapp.com/send_mail",{
                //await axios.post("http://localhost:4000/send_mail",{
                given_name: givenName,
                email: email
            })
            .then(await axios.post("https://pace-akash.herokuapp.com/send_mail_admin",{
                //.then(await axios.post("http://localhost:4000/send_mail_admin",{
                given_name: givenName,
                surname: surName,
                email: email,
                contact_no: contact,
                title_of_assignment: titleOfAssignment,
                assignment_description: description,
                deadline: deadline
            }).then((response)=>{
                if(response.data==="success"){
                    setSent(0)
                }
                else{
                    setSent(5)
                }
            }))
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <div className="mailing-form-container">
                <form onSubmit={handleSend} className="mailing-form">
                    <div className="mailing-form-row row-top">
                    <div className="mailing-form-input-wrapper">
                        <label htmlFor="given_name">Given Name<span style={{color:"slateblue"}}> *</span></label>
                        <input type="text" id="given_name" placeholder="Given Name" onChange={(e)=>setGivenName(e.target.value)} required name="given_name"/>
                    </div>
                    <div className="mailing-form-input-wrapper">
                        <label htmlFor="surname">Surname<span style={{color:"slateblue"}}> *</span></label>
                        <input type="text" id="surname" placeholder="Surname" onChange={(e)=>setSurName(e.target.value)} required/>
                    </div>
                    </div>
                    <div className="mailing-form-row">
                        <label htmlFor="email">Email Address<span style={{color:"slateblue"}}> *</span></label>
                        <input type="email" id="email" placeholder="E.g- abc@gmail.com" onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div className="mailing-form-row">
                        <label htmlFor="contact">Contact Number<span style={{color:"slateblue"}}> *</span></label>
                        <input type="number" id="contact" placeholder="Contact Number" onChange={(e)=>setContact(e.target.value)} required/>
                    </div>
                    <div className="mailing-form-row">
                        <label htmlFor="title">Title of Assignment<span style={{color:"slateblue"}}> *</span></label>
                        <input type="text" id="title" placeholder="Title of Assignment" onChange={(e)=>setTitleOfAssignment(e.target.value)} required/>
                    </div>
                    <div className="mailing-form-row">
                        <label htmlFor="description">Short Description of Assignment<span style={{color:"slateblue"}}> *</span></label>
                        <input type="text" id="description" placeholder="Short Description" onChange={(e)=>setDescription(e.target.value)} required/>
                    </div>
                    <div className="mailing-form-row">
                        <label htmlFor="deadline">Deadline<span style={{color:"slateblue"}}> *</span></label>
                        <input type="date" id="deadline" onChange={(e)=>setDeadline(e.target.value)} required/>
                    </div>
                    <br></br>
                    <div className="mailing-form-row row-end">
                        {sent === 0 ?
                        <p>{'Yay! Your order has been placed.'}</p>
                        :sent === 1 ? 
                        <div className="mailing-form-spinner"></div> :
                        <button type="submit" className="mailing-form-btn">{'place order'}</button>
                        }
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default MailingForm;