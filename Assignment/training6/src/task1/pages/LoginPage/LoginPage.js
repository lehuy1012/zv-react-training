import React, {useState, useEffect} from 'react';
import './LoginPage.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/loginAction';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const [token, setToken] = useState('');
    let history = useHistory();
    const dispatch = useDispatch();

    const error = useSelector((state) => state.loginInfo.error);
    const getToken = useSelector((state) => state.loginInfo.token);
    
    console.log('check error in login page ', error);
    
    useEffect (() => {
        if(alert === '')
        {
            if(error)
            {
                setAlert(error);
            }
        }
        else
        {  
            if(alert !== error)
            { 
                setAlert(error);
            }
        }
        if(token !== '')
        {
            history.push('/app');
        }
    }, [token, error]);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        if(email === '' || password === '')
        {
            dispatch(actions.loginFailureAction('email or password should not empty!'));
        }
        else
        {
            const user = {email : email, password : password};
            dispatch(actions.handleLoginAction(user));
        }
    }
    
    return (
       
        <div className="container">
            <div className="login--container">
                <div className="text-error">{alert && alert}</div>
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