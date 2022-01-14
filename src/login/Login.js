import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as _ from 'underscore';
import users from '../config/users';
import './login.scss';

function Login() {
    const navigate = useNavigate();
    const [state , setState] = useState({
        username : "",
        password : "",
        error: false
    })

    useEffect(() => {
        localStorage.setItem('isLoggedIn', false);
    }, []);
            
    const handleSignIn = (e) => {
        const { username, password } = state;
        if(!username || !password) {
            handleError();
            return
        };
        var user = _.findWhere(users, { username, password});
        if(!user) {
            handleError();
            return;
        };
        localStorage.setItem('isLoggedIn', true);
        navigate("/profile");
    }

    const handleError = () => {
        localStorage.setItem('isLoggedIn', false);
        setState(prevState => ({
            ...prevState,
            error: true
        }));
        setTimeout(() => {
            setState( state => ({
                username: '',
                password: '',
                error: false
            }))
        }, 3000)
    }

    const handleChange = (e) => {
        const {id , value} = e.target;
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    return(
        <div className="container-main login-page-container"> 
            {state.error ? (<div className='login-error-container bg-danger'>
                Please Enter Valid Credentials
            </div>): null }
            <div className='login-container'>
                <h3 className='text-center mb-4'> Sign In</h3>
                <div className='login-controls-container'>
                    <div className='mb-4'>
                        <label > User Name </label>
                        <input className='form-control' id='username' placeholder='username' value={state.username} onChange={handleChange}/>
                    </div>
                    <div className='mb-4'>
                        <label> Password </label>
                        <input className='form-control' type="password" id="password" placeholder='password'  value={state.password} onChange={handleChange}/>
                    </div>
                    <div className='mt-5 mb-2 signin-controls'>
                        <button className='btn btn-block btn-primary' onClick={(event) => handleSignIn(event)}> Login</button>
                        <button className='btn btn-link w-100 d-block text-right mt-3'> forgot password </button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Login;
