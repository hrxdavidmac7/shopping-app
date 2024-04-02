import { Button } from "bootstrap";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
export function FormikForm(){
    return(<div>
<h2>Reguster</h2>
<Formik initialValues={{UserName:'',Mobile:'',Age:'', City:''}}
onSubmit={(userDetails)=>{console.log(userDetails)}}
validationSchema={yup.object({
    UserName:yup.string().required('Name is required').min(4, "Name is roo short"),
    Mobile:yup.number().required("Mobile requireed").min(18, 'min age 18'),
    Age:yup.number().required("Age requireed").min(18, 'min age 18').max(40, "max 40 age")

}
)}



>
    {/* <Form >
        <dl>
            <dt>UserName</dt>
            <dd><Field type="text" name="UserName"></Field></dd>
            <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
            <dt>Mobile</dt>
            <dd><Field type="text" name="Mobile"></Field></dd>
            <dd className="text-danger"><ErrorMessage name="Mobile"></ErrorMessage></dd>
            <dt>Age</dt>
            <dd><Field type="number" name="Age"></Field></dd>
            <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
            <dt>City</dt>
            <dd><Field as="select" name=
            'City'>
                <option>Select Citys</option>
                <option>Sitpaur</option>
                <option>Kanpur</option>
                <option>Lucknow</option>
                <option>Agra</option>
                
                
            </Field></dd>
        </dl>
        <button type="submit"> Save</button>
    </Form> */
    
    
    
    
    

     formik =>
     <Form >
        <dl>
            <dt>UserName</dt>
            <dd><Field type="text" name="UserName"></Field></dd>
            <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
            <dt>Mobile</dt>
            <dd><Field type="text" name="Mobile"></Field></dd>
            <dd className="text-danger"><ErrorMessage name="Mobile"></ErrorMessage></dd>
            <dt>Age</dt>
            <dd><Field type="number" name="Age"></Field></dd>
            <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
            <dt>City</dt>
            <dd><Field as="select" name=
            'City'>
                <option>Select Citys</option>
                <option>Sitpaur</option>
                <option>Kanpur</option>
                <option>Lucknow</option>
                <option>Agra</option>
                
                
            </Field></dd>
        </dl>
        <button disabled={!formik.isValid} type="submit" className="btn btn-primary"> Submit</button>
        <button style={{display:(formik.dirty)?'inline':"none"}} type="submit" className="btn btn-success ms-3"> Save</button>
    </Form>


    }
    
    
    
    
    
    
    
</Formik>





    </div>)
}