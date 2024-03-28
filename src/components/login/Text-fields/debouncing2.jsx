import { useState, useRef, useEffect } from "react"


export function DebounceDemo()
{
 
    const [btnContainer, setBtnCotnainer] = useState({display:'block'});
    const [progressContainer, setProgressCotnainer] = useState({display:'none'});
    const [imgContainer, setImgCotnainer] = useState({display:'none'});
    const [progressValue, setProgressValue] = useState(0);
    const [msg, setMsg] = useState('Completed');
    let progressThread = useRef(null);
    let count = useRef(1);
   
    function LoadingProgress(){
        count.current = count.current + 1;
        setProgressValue(count.current);
        if(count.current==100) {
            setProgressCotnainer({display:'none'});
            setImgCotnainer({display:'block'});
            setBtnCotnainer({display:'none'});
        }
    }

    function handleLoadClick(){
        progressThread.current = setInterval(LoadingProgress,100);
        setBtnCotnainer({display:'none'});
        setProgressCotnainer({display:'block'});
     
    }
    function handlePauseClick(){
        clearInterval(progressThread.current);
        setMsg('Paused');
    }
    function handlePlayClick(){
        progressThread.current = setInterval(LoadingProgress,100);
        setMsg('Completed');
    }

    return(
        <div className="container">
           <div className="text-center">
              <div style={btnContainer}>
                <button onClick={handleLoadClick} className="btn btn-primary">Load Image</button>
              </div>
              <div style={progressContainer}>
                 <p> {progressValue} % {msg}..</p>
                 <progress min="1" max="100" value={progressValue} style={{width:'400px', height:'40px'}}></progress>
                 <div className="my-2">
                    <button onClick={handlePauseClick} className="btn me-2 btn-danger bi bi-pause"></button>
                    <button onClick={handlePlayClick} className="btn btn-success bi bi-play"></button>
                   
                 </div>
              </div>
              <div style={imgContainer}>
                <img src="iphone_15pro.jpg" height="400" width="300" />
              </div>
           </div>
        </div>
    )
}