import React,{useState} from "react";
import './main.css';

export default function Field1(props){

    function onChangeF(e){
        props.funcD(e.target.value);
    }

    return(
        <div>
            <div>
                <p className="field_1Text">If you have problems with pain/aches, stifness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)</p>
            </div>
            <div>
                <textarea onChange={(e)=>onChangeF(e)} className="input_1"/>
            </div>
        </div>
    )
}