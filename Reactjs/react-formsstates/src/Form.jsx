import { useState } from "react"

export default function Form(){
    let [formData,setFormData]=useState({
        fullName:"",
        username:""
    })

    // let handleNameChange=(event)=>{
        
    //     setFullName(event.target.value);
    // }

    // let handleUserNameChange=(event)=>{
        
    //     setUsername(event.target.value);
    // }

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            //computed filed value used after computing
            return {...currData,[event.target.name]:event.target.value};
        })

        
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({ fullName: "",username: "",});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Enter Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />

    <br /><br />

             <label htmlFor="username">Enter Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />

                    <br /><br />

                    <button>Submit</button>
                </form>
        </div>
    )
}