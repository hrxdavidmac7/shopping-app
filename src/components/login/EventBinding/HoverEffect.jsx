import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './hoverEffect.css';

export function HoverEffect()
{
    const [images, setImages] = useState([{img_src:""}]);
    const [previewSrc, setPreviewSrc] = useState('iphone_15pro.jpg');

    useEffect(()=>{

        axios.get("mobiles.json")
        .then(response=>{
            setImages(response.data);
        })

    },[])

    function handleMouseOver(e){
        setPreviewSrc(e.target.src);
    }
   
    return(
        <div className="container-fluid">
           <div className="row mt-4">
                <div className="col-2">
                    {
                        images.map(image=>
                            <div key={image.img_src} className="border my-3 border-2" style={{width:'90px'}} >
                                 <img onMouseOver={handleMouseOver} src={image.img_src} width="80" height="80" />  
                            </div>
                            )
                    }
                </div>
                <div className="col-10">
                    <img width='400' src={previewSrc} height="500" />
                </div>
           </div>
        </div>
    )
}
