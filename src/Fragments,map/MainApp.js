import React,{useState} from 'react';
import FoodItems from './Fragments,map/FoodItems';
import ErrorMessage from './Fragments,map/ErrorMessage';
import './App.css';
import Container from './Fragments,map/Container';
import FoodInput from './Fragments,map/FoodInput';

function App(){
    let [textToShow,setTextToShow]=useState();
    let [foodItems,setFoodItems]=useState([]);

    const onKeyDown=(event)=>{
        if(event.key==='Enter'){
            let newFoodItem=event.target.value;
            event.target.value="";
            let newItems=[...foodItems,newFoodItem];
            setFoodItems(newItems);
            console.log(newFoodItem);
        }
        setTextToShow(event.target.value);
    }

    return(
        <>
            <Container>
                <h1 className='food-heading'>Healthy foods</h1>
                <ErrorMessage items={foodItems}/>
                <FoodInput handleKeyDown={onKeyDown} />
                <p>{textToShow}</p>
                <FoodItems items={foodItems}/>
            </Container>

            <Container>
                <p>Above is the lists of all healthy foods that are good for your health and well being</p>
            </Container>
        </>
    )
}

export default App;