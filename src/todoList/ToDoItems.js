import ToDoItem from "./ToDoItem";

const ToDoItems=({todoItems,onDeleteClick})=>{
    return(
        <>
            <div className='items-container'>
                {todoItems.map(item=><ToDoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}/>)}

                {/* <ToDoItem1 />
                <ToDoItem2 /> */}
            </div>
        </>
    )
}

export default ToDoItems;