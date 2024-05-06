import {useState} from "react";
import AppName from "./todoList/AppName.js";
import AppToDo from "./todoList/AppToDo.js";
// import ToDoItem1 from "./todoList/ToDoItem1.js";
// import ToDoItem2 from "./todoList/ToDoItem2.js";
import './todoList/ToDoCss.css';
import ToDoItem from "./todoList/ToDoItem.js";
import ToDoItems from "./todoList/ToDoItems.js";
import WelcomeMessage from "./todoList/WelcomeMessage.js";

function App(){
    // const initialTodoItems=[
    //     {
    //         name:'Buy Milk',
    //         dueDate:'04/10/2023'
    //     },
    //     {
    //         name:'Go To College',
    //         dueDate:'04/10/2023'
    //     },
    //     {
    //         name:'like this video',
    //         dueDate:'right now' 
    //     }
    // ];

    const [todoItems,setToDoItems]=useState([]);

    const handleNewItem=(itemName,itemDueDate)=>{
        const newToDoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
        setToDoItems(newToDoItems);
    }
    
    const handleDeleteItem=(todoItemName)=>{
        const newToDoItems=todoItems.filter(item=>item.name!==todoItemName);
        setToDoItems(newToDoItems);
    }

    return(
        <center className='todo-container'>
            <AppName />
            <AppToDo onNewItem={handleNewItem}/>
            {todoItems.length===0&&<WelcomeMessage/>}

            <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
        </center>
    )
}

export default App;