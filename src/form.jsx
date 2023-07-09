import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css'
import 'animate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signin } from './api';
import Cookies from 'js-cookie';

const Form = () => {
    const [useAnimateSignin, setAnimatesignin] = useState('')
    const [useAnimateSignup, setAnimatesignup] = useState('')
    const [isSignin, setSignin] = useState(true)
    const [signForm, setSignForm] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSignForm((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const onhandleSignInSubmit = async (event) => {
        event.preventDefault();
        // Your form submission logic here
        console.log("Form submitted with data:", signForm);
        const { username, password } = { ...signForm };
        const data = await signin({ username: username, password: password })
        console.log("form ", data);
        if (data["_id"]) {
            //console.log(data["_id"]);
            Cookies.set('name', data["username"]);
            Cookies.set('id', data["_id"]);
            navigate('/todo');
        } else {
            alert("invalid user");
            navigate('/');
        }
    };

    return (

        <div className='outer'>
            <div className='inner1'>
                <img src="\src\assets\img\login.png" alt="err" />
            </div>
            <div className='inner2'>
                <div>
                    {
                        isSignin ? (
                            <div className={`Signin ${useAnimateSignin}`} >
                                <h2>Sign in</h2>
                                <form onSubmit={onhandleSignInSubmit}>
                                    <input className='username' type="text" name="username" id="username" placeholder='UserName' value={signForm.name}
                                        onChange={handleInputChange} />
                                    <br />
                                    <input className='password' type="password" name="password" id="password" placeholder='password' value={signForm.name}
                                        onChange={handleInputChange} />
                                    <br />
                                    <button className='button' type="submit">Signin</button>
                                </form>
                            </div>
                        ) : (
                            <div className={`Signup ${useAnimateSignup}`}>
                                <h2>SignUp</h2>
                                <form >
                                    <input className='username' type="text" name="userName" id="userNaem" placeholder='UserName' />
                                    <br />
                                    <input className='username' type="text" name='Email' id='Email' placeholder='someone@gamil.com' />
                                    <br />
                                    <input className='username' type="password" name="password1" id="password1" placeholder='password' />
                                    <br />
                                    <input className='password' type="password" name="password2" id="password2" placeholder='Repeat password' />
                                    <br />
                                    <button className='button' type="submit">SignUP</button>
                                </form>
                            </div>

                        )

                    }
                    <br />
                    {
                        isSignin ?
                            (<p>Already have a account <button className='downbutton' onClick={() => {
                                setSignin(!isSignin)
                                setAnimatesignin('animate__animated animate__fadeIn')
                                setAnimatesignup('animate__animated animate__fadeIn')


                            }}>Signup</button></p>) : (<p>Create a New Account <button className='downbutton' href="" onClick={() => {
                                setSignin(!isSignin)

                                setAnimatesignin('animate__animated animate__fadeIn')
                                setAnimatesignup('animate__animated animate__fadeIn')
                            }}>Signin</button></p>)
                    }
                </div>
            </div>
            <ToastContainer />
        </div >
    );
}

export default Form;
