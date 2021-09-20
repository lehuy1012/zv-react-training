import React, {useState, useEffect} from 'react';
import ContentLeft from "./contentLeft/ContentLeft";
import ContentRight from "./contentRight/ContentRight";
import './Content.css';
import { getAllUsers, getUserById } from '../../../api/apiUser';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../../redux/actions/homeAction"; 


const Content = () => {

    const [allUser, setAllUser] = useState([]);
    const [myInfo, setMyInfo] = useState({});
    const dispatch = useDispatch();

    const listUser = useSelector((state) => state.users.listUser);
    const info = useSelector((state) => state.users.myInfo);
    

    useEffect( () => {

        dispatch(actions.getAllUserRequest());
        dispatch(actions.getMyInfoRequest());

        
        setAllUser(listUser);
        setMyInfo(info);
    },[listUser]);

    const users = allUser.map(
        (user) => { return {
            'path' : `/app/user/${user.id}`, component : ContentRight,
            'nameRow' : `${user.email}`,
            'info' : user}
        }
    );


    const routes = [
        { 
            path: '/app/home', component : ContentRight,
            nameRow: 'Home',
            info: {email : "Welcome Home"}
        },
        { 
            path: "/app/users", component : ContentLeft,
            nameRow: 'User',
            routes: users
        },
        { 
            path: '/app/myInfo', component : ContentRight,
            nameRow: 'myInfo',
            info: myInfo
    
        },
    ];

    return (
        <div className="content--container">
            <ContentLeft routes={routes}/>
        </div>

    );
}

export default Content;