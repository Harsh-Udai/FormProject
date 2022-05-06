import React from "react";

export default function Field4(props){

    function onChang(e){
        props.funcD6(e.target.name,e.target.checked);
    }

    return(
        <div>
            <div>
                <p>When do you experience the problems?</p>
                <><input onChange={(e)=>onChang(e)} type="checkbox" name="Not relevant" /> Not relevant</>
                <br></br>
                <><input onChange={(e)=>onChang(e)} type="checkbox" name="When lying down" /> When lying down</>
                <br></br>
                <><input onChange={(e)=>onChang(e)} type="checkbox" name="When sitting" /> When sitting</>
                <br></br>
                <><input onChange={(e)=>onChang(e)} type="checkbox" name="Under standing" /> Under standing</>
                <br></br>
                <><input onChange={(e)=>onChang(e)} type="checkbox" name="In walking" /> In walking</>


            </div>
        </div>
    )
}