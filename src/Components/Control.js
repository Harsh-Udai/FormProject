import react, { useState } from 'react';
import Header from './Header';
import Field1 from './Field1';
import Field2 from './Field2';
import Field3 from './Field3';
import Field4 from './Field4';
import Field5 from './Field5';
import Summary from './Summary';

import './main.css';

export default function Control(props){

    const [disp,setDisp] = useState(true);
    const [back,setBack] = useState(false);

    
    const [Data_1, setData_1] = useState("");
    const [Data_2, setData_2] = useState({
        'Not relevant':false,
        'Yes':false,
        'No':false
    })
    const [Data_3, setData_3] = useState({
        'Not relevant':false,
        'Yes':false,
        'No':false
    })
    const [Data_4, setData_4] = useState({
        'Not relevant':false,
        'Yes':false,
        'No':false
    })

    const [Data_5, setData_5] = useState({
        'Not relevant':false,
        'Daily':false,
        'Several times/week':false,
        'A few times/month':false,
        'A few times/year':false,
    })

    const [Data_6, setData_6] = useState({
        'Not relevant':false,
        'When lying down':false,
        'When sitting':false,
        'Under standing':false,
        'In walking':false,
    })

    const [Data_7, setData_7] = useState({
        '1':false,
        '2':false,
        '3':false,
        '4':false,
        '5':false,
        '6':false,
        '7':false,
        '8':false,
        '9':false,
        '10':false
    })

    function d1(value){
        setData_1(value);
    }

    function d2(match,value){
        if(match=='Not relevant'){
            setData_2({...Data_2, 'Not relevant' :value})
        }
        else if(match=='Yes'){
            setData_2({...Data_2, 'Yes' :value})
        }
        else{
            setData_2({...Data_2, 'No' :value})
        }        
    }
    function d3(match,value){
        if(match=='Not relevant'){
            setData_3({...Data_3, 'Not relevant' :value})
        }
        else if(match=='Yes'){
            setData_3({...Data_3, 'Yes' :value})
        }
        else{
            setData_3({...Data_3, 'No' :value})
        }        
    }
    function d4(match,value){
        if(match=='Not relevant'){
            setData_4({...Data_4, 'Not relevant' :value})
        }
        else if(match=='Yes'){
            setData_4({...Data_4, 'Yes' :value})
        }
        else{
            setData_4({...Data_4, 'No' :value})
        }        
        console.log(Data_4);
    }

    function d5(match,value){
        if(match==='Not relevant'){
            setData_5({...Data_5, 'Not relevant' :value})
        }
        else if(match==='Daily'){
            setData_5({...Data_5, 'Daily' :value})
        }
        else if(match==='Several times/week'){
            setData_5({...Data_5, 'Several times/week' :value})
        }
        else if(match==='A few times/month'){
            setData_5({...Data_5, 'A few times/month' :value})
        }
        else{
            setData_5({...Data_5, 'A few times/year' :value})
        } 

    }

    function d6(match,value){
        
        if(match==='Not relevant'){
            setData_6({...Data_6, 'Not relevant' :value})
        }
        else if(match==='When lying down'){
            setData_6({...Data_6, 'When lying down' :value})
        }
        else if(match==='When sitting'){
            setData_6({...Data_6, 'When sitting' :value})
        }
        else if(match==='Under standing'){
            setData_6({...Data_6, 'Under standing' :value})
        }
        else{
            setData_6({...Data_6, 'In walking' :value})
        } 

    }

    function d7(match,value){
        
        if(match==='1'){
            setData_7({...Data_7, '1' :value})
        }
        else if(match==='2'){
            setData_7({...Data_7, '2' :value})
        }
        else if(match==='3'){
            setData_7({...Data_7, '3' :value})
        }
        else if(match==='4'){
            setData_7({...Data_7, '4' :value})
        }
        else if(match==='5'){
            setData_7({...Data_7, '5' :value})
        }
        else if(match==='6'){
            setData_7({...Data_7, '6' :value})
        }
        else if(match==='7'){
            setData_7({...Data_7, '7' :value})
        }
        else if(match==='8'){
            setData_7({...Data_7, '8' :value})
        }
        else if(match==='9'){
            setData_7({...Data_7, '9' :value})
        }
        else{
            setData_7({...Data_7, '10' :value})
        }
    }

    function nextPage(){
        setDisp(!disp);
        setBack(!back);
    }

    
    function incrementForm(){
        
        props.inc();
    }

   

    return(
        <div>
            
                    <div>
                        
                        <Header />
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div className='mainCon'>
                                {
                                    disp ? <div> <Field1 funcD={d1} />
                                    <Field2 funcD1={d2} funcD2={d3} funcD3={d4}/>
                                    <Field3 funcD5={d5}/>
                                    <Field4 funcD6={d6} />
                                    <Field5 funcD7={d7}/> </div> : <Summary d1={Data_1} d2={Data_2} d3={Data_3} d4={Data_4} d5={Data_5} d6={Data_6} d7={Data_7} />
                                }
                                
                                <div className="">
                                    {disp ?  <button onClick={()=>incrementForm()} className="addButton" type={"submit"} >+</button>: null}
                                    
                                </div>
                                <div className="">
                                    {back ? <button onClick={()=>nextPage()} className="addButton_1" type="submit" >Back</button> : null}
                                    {disp ? <button onClick={()=>nextPage()} className="addButton_2" type="submit" >Next</button> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                
          
            
        </div>
    )
}