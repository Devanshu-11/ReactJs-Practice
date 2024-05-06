import styles from './FoodInput.module.css';

const FoodInput=({handleKeyDown})=>{
    return(
        <input type='text' placeholder='Enter your food item' className={styles.foodInput} onKeyDown={handleKeyDown}></input>
    )
}

export default FoodInput;