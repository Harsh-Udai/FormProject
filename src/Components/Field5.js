import React from "react";

export default function Field5(props){
    function onChang(e){
        props.funcD7(e.target.name,e.target.checked);
    }
    return(
        <div>
            <div>
                <p>How intense is the experinece of the problem on average on a 0-10 scale?</p>
                <div style={{display:'flex',gap:'50px',alignItems:'center'}}>
                    <div> 1<br></br><input name="1" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 2<br></br><input name="2" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 3<br></br><input name="3" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 4<br></br><input name="4" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 5<br></br><input name="5" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 6<br></br><input name="6" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 7<br></br><input name="7" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 8<br></br><input name="8" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 9<br></br><input name="9" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                    <div> 10<br></br><input name="10" onChange={(e)=>onChang(e)} type="checkbox" /></div>
                </div>
            </div>
        </div>
    )
}