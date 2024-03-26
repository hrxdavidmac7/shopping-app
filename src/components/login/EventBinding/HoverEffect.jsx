import axios from "axios";
import { useState } from "react";

export function HoverEffect(){

  const [images, setImages] = useState([{img_src:""}]);

  axios.get("mobiles.json")
  .then(response=>{
    setImages(response.data)}
  )


    return(
        <div className="comtainer-fluid">
            <div className="row mt-4">
                <div className="col-1">
                    {
                        images.map(img=>
                        <div key={img.img_src} className="border-2 ">
                            {
                                <div> <img src={img.img_src} alt="imagese of logo"></img></div>
                            }


                        </div>
                            )
                    }

                </div>
            </div>
                 
                 
        </div>
    )
}