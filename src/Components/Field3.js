import React,{useState} from "react";
import './main.css';

export default function Field1(props){

    function onChang(e){
        props.funcD5(e.target.name,e.target.checked);
    }
    
    return(
        <div>
            <div className="filed3P">
                <p>How often do you experience the problems?</p>
                <div className="filed3P">
                <><input onChange={(e)=>onChang(e)} name="Not relevant" type={"checkbox"} /> Not relevant</>
                <><input onChange={(e)=>onChang(e)} name="Daily" type={"checkbox"} /> Daily</>
                <><input onChange={(e)=>onChang(e)} name="Several times/week" type={"checkbox"} /> Several times/week</>
                <><input onChange={(e)=>onChang(e)} name="A few times/month" type={"checkbox"} /> A few times/month</>
                <><input onChange={(e)=>onChang(e)} name="A few times/year" type={"checkbox"} /> A few times/year</>
                </div>
                
            </div>
            
        </div>
    )
}