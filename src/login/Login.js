import './login.scss';
import users from '../config/users';
import { useState } from 'react';
import * as _ from 'underscore';

function Login() {

    const [state , setState] = useState({
        username : "",
        password : "",
        error: false
    })
            
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
    }

    const handleError = () => {
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
                fafasf
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
                        <a href='/' className='d-block text-right mt-3'> forgot password </a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Login;
