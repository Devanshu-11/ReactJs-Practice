import {useState} from 'react';
import ButtonsContainer from './Calculator/ButtonsContainer';
import styles from './Calculator/Calculator.module.css';
import Display from './Calculator/Display';

function App(){
    const [calVal,setCalVal]=useState('');
    const onButtonClick=(buttonText)=>{
        if(buttonText==='C'){
            setCalVal("");
        }else if(buttonText==='='){
            const result=eval(calVal);
            setCalVal(result);
        }else{
            const newDisplayValue=calVal+buttonText;
            setCalVal(newDisplayValue);
        }
    }


    return(
        <div className={styles.calculator}>
            <Display displayValue={calVal}/>
            <ButtonsContainer onButtonClick={onButtonClick}/>
        </div>
    )
}

export default App;