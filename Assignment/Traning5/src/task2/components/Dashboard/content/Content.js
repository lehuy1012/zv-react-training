import React, {useState, useEffect} from 'react';
import ContentLeft from "./contentLeft/ContentLeft";
import ContentRight from "./contentRight/ContentRight";
import './Content.css';
import { getAllUsers, getUserById } from '../../../api/apiHome';


const Content = () => {

    const [allUser, setAllUser] = useState([]);
    const [myInfo, setMyInfo] = useState({});
    

    useEffect(async () => {

        const data = await getAllUsers();
        const myInfo = await getUserById(localStorage.getItem('userID'));
        
        setAllUser(data);
        setMyInfo(myInfo);
        
    },[]);

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