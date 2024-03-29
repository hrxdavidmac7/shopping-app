import { useFormik } from "formik";

export function Formik(){
    




    const formik = useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            City:'',
            Gender:''
        },
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
                    <dd><input type="text" onChange={formik.handleChange} name="UserName" className="form-control" maxLength="10"></input></dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age" className="form-control" maxLength="2"></input></dd>
                    <dt>City</dt>
                    <dd><select className="form-select" name="City" onChange={formik.handleChange}>
                        <option>Delhi</option>
                        <option>Hydrabd</option>
                        <option>Lucknow</option>
                        <option>Delhi</option>
                        <option>Delhi</option>                
                    </select></dd>
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