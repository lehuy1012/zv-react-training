import React, { useEffect} from 'react';
import './HomePage.css';
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Banner from '../components/Banner/Banner';
import Content from '../components/Content/Content';
import { useDispatch } from 'react-redux';
import { getTodos } from '../redux/actions/todosAction';

const HomePage = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);
   

    return (

        <div className="container--home--page">
            <div><NavigationBar /></div>
            <div><Banner /></div>
            <div><Content /></div>
        </div>
    );
}


export default HomePage;