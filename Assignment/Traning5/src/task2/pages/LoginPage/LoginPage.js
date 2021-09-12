import React, {useState} from 'react';
import './LoginPage.css';
import {LoginApi} from "../../api/apiLogin";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { LoginAction} from '../../redux/actions/loginAction';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();


    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        if(email === '' || password === '')
        {
            return;
        }
        else
        {
            console.log('submit email : ', email, ' password ', password);
            const user = {email : email, password : password};
            const loginSuccess = LoginApi(user);
            if(loginSuccess) {
                console.log('in submit with data', loginSuccess);
                dispatch(LoginAction(loginSuccess));
                history.push("/app");
            }
            else {
                history.push("/login");
            }
        }
    }
    
    return (
       
        <div className="container">
            
            <div className="login--container">
                <div className="login--email typeBox">
                    <h4 className="reset--margin">Email</h4>
                    <input type="email" className="input" value={email} onChange={(e) => handleChangeEmail(e)}/>
                </div>
                <div className="login--password typeBox">
                    <h4 className="reset--margin">Password</h4>
                    <input type="password" className="input" value={password} onChange={(e)=> handleChangePassword(e)}/>
                </div>
                <div className="btn--container">

                    <button className="btn--submit--login" onClick={() => handleSubmit()}>Submit</button>
                    <button className="btn--submit--login"></button>
                </div>
            </div>

        </div>
    );
}

export default Login;