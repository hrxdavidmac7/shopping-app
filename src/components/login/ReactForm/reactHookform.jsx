import { useForm } from "react-hook-form";
import { NavBar } from "../../../custom-component/nav-bar";
export function Hookform(){


    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values)=>{
        console.log(values);
    }

    return(
        <div className="container-fluid">
            <NavBar Theme="bg-danger text-white" BrandName="Amazon" MenuItems={["Home", "Shop", "Blog", "Contact"]} />
       
       <NavBar Theme="bg-dark text-white" BrandName="Mr. Smoothy" MenuItems={["Home", "Drinks", "Offers", "Coffee", "Sweets"]} />
            <h2>Register User</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" {...register("UserName", {required:true, minLength:4} )} /></dd>
                    <dd className="text-danger">
                        {
                           (errors.UserName?.type==="required")?<span>Name Required</span>:<span></span> && (errors.UserName?.type==="minLength")?<span>Name too Short..</span>:<span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" {...register("Mobile", {required:true, pattern: /\+91\d{10}/})} /></dd>
                    <dd className="text-danger">
                        {
                            (errors.Mobile?.type==="required")?<span>Mobile Required</span>:<span></span> && (errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>
                        }
                    </dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" {...register("Age", {required:true})} /></dd>
                </dl>
                <button type="submit">Register</button>
            </form>  
        </div>
    )
}