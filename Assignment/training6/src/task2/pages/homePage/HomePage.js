import ListTask from '../../components/task/ListTask';
import InputTask from '../../components/inputTask/inputTask';
import './HomePage.css';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions/actionsTask';

const HomePage = () => {

    const dispatch = useDispatch();
    dispatch(actions.getAllTaskRequest());


    return (
        <div className="container--task">

            <div className="container--input--task">
                <div className="home--input__Task">
                    <InputTask />
                </div>
                <div className="home--list__Task">
                    <ListTask />
                </div>
            </div>
        
        </div>
    );
}

export default HomePage;