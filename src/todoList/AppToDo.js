import {useState,useRef} from "react";
import {IoMdPersonAdd} from "react-icons/io";

function AppToDo({onNewItem}){
    // const [toDoName,setToDoName]=useState('');
    // const [dueDate,setDueDate]=useState('');
    const numOfUpdates=useRef(0);
    const toDoNameElement=useRef();
    const dueDateElement=useRef();

    // const handleNameChange=(event)=>{
    //     setToDoName(event.target.value);
    //     numOfUpdates.current=numOfUpdates.current+1;
    // }

    // const handleDateChange=(event)=>{
    //     setDueDate(event.target.value);
    //     console.log(numOfUpdates.current);
    // }

    const handleAddButtonClicked=(event)=>{
        event.preventDefault();
        const toDoName=toDoNameElement.current.value;
        const dueDate=dueDateElement.current.value;
        toDoNameElement.current.value="";
        dueDateElement.current.value="";
        onNewItem(toDoName,dueDate);
        // setToDoName('');
        // setDueDate('');
    }

    return(
        <div className="container text-center">
            <form className="row kg-row" onSubmit={handleAddButtonClicked}>
                <div className="col-6">
                    <input type='text' ref={toDoNameElement} placeholder='Enter your todo here' />
                </div>

                <div className="col-4">
                    <input type='date' ref={dueDateElement}/>
                </div>

                <div className="col-2">
                    <button type="submit" className="btn btn-success kg-button dg-button"><IoMdPersonAdd /></button>
                </div>
            </form>
        </div>
    )
}

export default AppToDo;