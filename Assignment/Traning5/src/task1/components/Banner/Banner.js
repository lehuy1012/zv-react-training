import React, {useState} from 'react';
import axios from 'axios';
import './Banner.css';
import { useDispatch } from 'react-redux';
import {createTodo} from '../../redux/actions/todosAction';
import { createTodoApi, getAllTodo, getAllTodoApi } from '../../api/todosApi';
import {getTodos} from '../../redux/actions/todosAction';
import moment from 'moment';


const Banner = () => {


    const [valueTodo, setValueTodo] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        
        setValueTodo(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const todo = {
            todos: valueTodo,
            date: moment().format("MMM Do YY"),
            makeDone: false
        }
        setValueTodo('');
        // dispatch action create update store
        dispatch(createTodo(todo));
        // update on database
        await createTodoApi(todo);
        // get new list todo and add to store before create new todo
        dispatch(getTodos());
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className="container--banner">
                <div className="banner--left">
                    Add Todo
                </div>
                <div ></div>
                <div className="banner--center">
                    <input className="type--todo" valueTodo={valueTodo} onChange={handleChange} type="text" placeholder="input todo"/>
                </div>
                <div className="banner--right">
                    <button className="btn--add--todo" type="submit">add</button>
                </div>
            </div>

        </form>
    );
}   


export default Banner;
