import React from "react";
import PropTypes from "prop-types";
import './Todo.css';
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo} from "../../../redux/actions/todosAction";
import { deleteTodoByIdApi, getTodoByIdApi, updateTodoByIdApi } from "../../../api/todosApi";


function Todo(props)
{
    
    const todoList = props.todo;
    const dispatch = useDispatch();

    const {id, todos, date, makeDone} = todoList;

    const handleUpdate = async (id) => {
        dispatch(toggleTodo(id));
        const makeDoneID = await getTodoByIdApi(id);
        const update = {makeDone: ! makeDoneID.makeDone};
        await updateTodoByIdApi(id, update);
        
    } 

    const handleDeleteTodo = async (id) => {

        dispatch(deleteTodo(id));
        await deleteTodoByIdApi(id);
        
    }

    if(todoList)
    {
        
        return (
            <div className="Todo--container">
                <h3 className="Todo--todo">{todos} </h3>
                <h3 className="Todo--date">{date} </h3>
                <div style={{width : '5%'}}>
                    <input type="checkbox" defaultChecked={makeDone} onClick={() => handleUpdate(id)} />    
                </div>
                <div className="Todo--btn-handle">
                    <button className="btn">Edit</button>
                    <div style={{width:"10px"}}></div>
                    <button className="btn" onClick={() => handleDeleteTodo(id)}>Delete</button>
                </div>    
            </div>
        );
        
    }
    else
    {
        return null;  
    }
  
}

export default Todo;