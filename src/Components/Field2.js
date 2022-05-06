import React,{useState} from "react";
import './main.css';

export default function Field1(props){

    const [ck1,setck1 ] = useState(false);
    const [ck2,setck2 ] = useState(false);
    const [ck3,setck3 ] = useState(false);

    function onChag1(e){
        props.funcD1(e.target.name,e.target.checked);
    }

    function onChag2(e){
        props.funcD2(e.target.name,e.target.checked);
    }

    function onChag3(e){
        props.funcD3(e.target.name,e.target.checked);
    }
    
    return(
        <div>
            <div className="mainC_">
                <p>Have you been diagnosed with this problem?</p>
                <><input onChange={(e)=>onChag1(e)} name="Not relevant" type={"checkbox"} /> Not relevant</>
                <><input onChange={(e)=>onChag1(e)} name="Yes" type={"checkbox"} /> Yes</>
                <><input onChange={(e)=>onChag1(e)} name="No" type={"checkbox"} /> No</>

            </div>
            <div className="mainC_">
                <p>Did the problem start after a physical trauma?</p>
                <><input onChange={(e)=>onChag2(e)}  name="Not relevant" type={"checkbox"} /> Not relevant</>
                <><input onChange={(e)=>onChag2(e)} name="Yes" type={"checkbox"} /> Yes</>
                <><input onChange={(e)=>onChag2(e)} name="No" type={"checkbox"} /> No</>

            </div>
            <div className="mainC_">
                <p>Did the problem start after a mental trauma</p>
                <><input onChange={(e)=>onChag3(e)} name="Not relevant" type={"checkbox"} /> Not relevant</>
                <><input onChange={(e)=>onChag3(e)} name="Yes" type={"checkbox"} /> Yes</>
                <><input onChange={(e)=>onChag3(e)} name="No" type={"checkbox"} /> No</>
            </div>
        </div>
    )
}