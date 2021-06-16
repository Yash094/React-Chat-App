import React, {useState} from 'react'
import firebase from  'firebase'
import {auth, login} from '../firebase'
import { Link } from 'react-router-dom';
import './Signin.css'

function Signin() {
function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(form);
  
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <section className='login'>
    <div className='loginContainer'>
    <h1 className='headingg'>LOG IN</h1>
    <label>EMAIL</label>
    <input type='text' placeholder="email" id="mail" 
            onChange={(e) => 
            setForm({...form, email: e.target.value})} autoFocus required/>
   
    <label>PASSWORD</label>
    <input type="password"  placeholder="Password"
            onChange={(e) => 
            setForm({...form, password: e.target.value})} autoFocus required/>
    
    <div className='btnContainer'>
    <button type='submit' >LOGIN</button>
    <button style={{marginTop:"10px"}}onClick={signIn} >SIGN IN WITH GOOGLE</button>
     <Link to='/signup'>
    <p>Don't Have An Account ?</p>
    </Link>
    </div>
    </div>
    </section>
    </form>
    </div>
  )

}
export default Signin;