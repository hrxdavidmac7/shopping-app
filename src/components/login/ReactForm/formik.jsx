import { useFormik } from "formik";
import { error } from "jquery";
import * as yup from "yup";

export function Formik(){
    
//    function ValidateUser(userDetails)
//    {
//       var errors = {UserName:'', Age:0, City:'', Gender:''}
//       if(userDetails.UserName.length==0){
//         errors.UserName  = "User Name Required";
//       }else{
//         if(userDetails.UserName.length<4){
//             errors.UserName = "Name Too Short Min 8 Char";
//         }else{
//             errors.UserName='';
//         }

//       }

//       if(userDetails.Age.length==0){
//         errors.Age = "Age required";
//       }else{
//         if(isNaN(userDetails.Age)){
//             errors.Age='Age must be number';
//         }else{
//             errors.Age="";
//         }
//       }
//       if(userDetails.City=='-1'){
//         errors.City ="Please Select A city";
//       }else{
//         errors.City="";
//       }
//       return errors;
//    }
   



    const formik = useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            Age:0,
            City:'',
            Gender:''
        },
        validationSchema:yup.object({
            UserName:yup.string().required('Name is required').min(4, "Name is roo short"),
            Age:yup.number().required("Age requireed").min(18, 'min age 18').max(40, "max 40 age"),
            Password:yup.string().required("Password Required").matches(/(?=.*[A-Z])/,"Min 4-15 char long")


        }),
        // validate :ValidateUser,
        onSubmit:(userDetails)=>{
            console.log(userDetails);
        }
    });
    
    
    
    return(
        <div className="container-fluid">
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" className="form-control" maxLength="10"></input></dd>
                    <dd className="text text-danger">{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" {...formik.getFieldProps("Password")} className="form-control"></input></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Age</dt>
                    <dd><input type="text"  {...formik.getFieldProps("Age")} name="Age" className="form-control" maxLength="2"></input></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd><select className="form-select" name="City" {...formik.getFieldProps("City")}>
                        <option value='-1'>Delhi</option>
                        <option>Hydrabd</option>
                        <option>Lucknow</option>
                        <option>Delhi</option>
                        <option>Delhi</option>                
                    </select></dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" onChange={formik.handleChange} className="form-check-input" name="Gender" value="male"></input>Male
                        <input type="radio" onChange={formik.handleChange}  className="form-check-input" name="Gender" value="female"></input>Female
                    </dd>
                </dl>
                <button  type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}