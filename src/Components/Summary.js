import React from "react";

export default function Summary(props){
    
    function parse(object){
        for (const key of Object.keys(object)) {
            if(object[key]===true){
                return key;
                break
            }
        }
        return 'Not Applicable';
    }

    return(
        <div>
            <h1>Summary</h1>
            <div>
                <h3>Problems:</h3>
                <p>{props.d1}</p>
            </div>
            <div>
                <h3>Diagnosed: <span style={{fontSize:'90%'}}>{parse(props.d2)}</span></h3>
            </div>
            <div>
                <h3>Physical trauma: <span style={{fontSize:'90%'}}>{parse(props.d3)}</span></h3>
               
            </div>
            <div>
                <h3>Mental Trauma: <span style={{fontSize:'90%'}}>{parse(props.d4)}</span></h3>
               
            </div>
            <div>
                <h3>Expeience: <span style={{fontSize:'90%'}}>{parse(props.d5)}</span></h3>
            </div>
            <div>
                <h3>Expeience State: <span style={{fontSize:'90%'}}>{parse(props.d6)}</span></h3>
            </div>
            <div>
                <h3>Intensity: <span style={{fontSize:'90%'}}>{parse(props.d7)}</span></h3>
            </div>
        </div>
    )
}