import styles from './Calculator.module.css';

const Display=({displayValue})=>{
    return(
        <input className={styles.display} type='text' value={displayValue} readOnly></input>
    )
}

export default Display;