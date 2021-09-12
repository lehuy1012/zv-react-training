import React from 'react';
import './Content.css';
import Todo from './Todo/Todo';
import { useSelector } from 'react-redux';
import { filterDone, getTodos } from '../../redux/actions/todosAction';
import { useDispatch } from 'react-redux';





const Content = () => {

    const todoList = useSelector((state) => state.Todos.listTodo);
    const dispatch = useDispatch();

    const handleFilterDone = () => { 

        let flag = false; // check it all done ?
        
        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].makeDone === false)
            {
                flag = true;
            }
        }

        if(flag === true)
        {
            dispatch(filterDone());
        }
        else
        {   
            dispatch(getTodos());
        }
    };

    if(todoList)
    {
        return (
            <div className="container">
               
                
                <div className="container--filter">
                    <input type="text" className="input--search" placeholder="Search..."/>
                    <button  className="input--search" onClick={() => handleFilterDone() }>Filter Done</button>
                
                </div>
        
                <div className="container--content">

                    {todoList.map((todo) => { return <Todo key={todo.id} todo={todo}/>})} 
                    
                </div>
                
            </div>
        );
    }
    else
    {
        return null;
    }

    
}

export default Content;