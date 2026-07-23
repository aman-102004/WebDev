import "./CommentsForm.css";
import { useState } from "react";

export default function CommentsForm({addNewComment}){

    let[formdata,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    })

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        })
    }

    let handleSubmit=()=>{
        console.log(formdata);
        addNewComment(formdata);
        event.preventDefault();
    }
    return(
        <div>
            <h4>Write A comment</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" value={formdata.username} onChange={handleInputChange} id="username" name="username"/>
                <br /><br />

                <label htmlFor="remarks">Remarks</label>
                <textarea  value={formdata.remarks} placeholder="remarks" onChange={handleInputChange} id="remarks" name="remarks">Remarks</textarea>
                <br /><br />
                <label htmlFor="rating">rating</label>
                <input placeholder="rating" type="number" min={1} max={5}  value={formdata.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /><br />
                <button>Add A button</button>


            </form>
        </div>
    )
}



//this code can we used for forms validations using formik(its a npm package)

// import "./CommentsForm.css";
// import { useState } from "react";
// import { useFormik} from 'formik';

// //this code is converted to formik from usestate for the original code either see lec 6 of react or try to undo it

// const validate = values => {
//    const errors = {};
//    if (!values.username) {
//      errors.username ="Username cant be empty";
//    }
 
//    return errors;
//  };
// export default function CommentsForm({addNewComment}){

//    const formik = useFormik({
//      initialValues: {
//        username: '',
//        remarks: '',
//        rating:5,
//      },
//      validate,
//      onSubmit: values => {
//        alert(JSON.stringify(values, null, 2));
//      },
//    });

//     let handleInputChange=(event)=>{
//         setFormData((currData)=>{
//             return {...currData,[event.target.name]:event.target.value}
//         })
//     }

//     let handleSubmit=()=>{
//         console.log(formdata);
//         addNewComment(formdata);
//         event.preventDefault();
//     }
//     return(
//         <div>
//             <h4>Write A comment</h4>

//             <form onSubmit={formik.handleSubmit}>
//                 <label htmlFor="username">Username</label>
//                 <input placeholder="username" type="text" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
//                 {formik.errors.username ? <div>{formik.errors.username}</div> : null}
//                 <br /><br />


//                 <label htmlFor="remarks">Remarks</label>
//                 <textarea  value={formik.values.remarks} placeholder="remarks" onChange={formik.handleChange} id="remarks" name="remarks">Remarks</textarea>
//                 <br /><br />
//                 <label htmlFor="rating">rating</label>
//                 <input placeholder="rating" type="number" min={1} max={5}  value={formik.values.rating} onChange={formik.handleChange} id="rating" name="rating"/>
//                 <br /><br />
//                 <button type="submit">Add A button</button>


//             </form>
//         </div>
//     )
// }

