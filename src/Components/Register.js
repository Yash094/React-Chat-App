import React, {useState} from 'react'
import {auth, register} from '../firebase'
import firebase from  'firebase'  
import { Link } from 'react-router-dom';

const Register = () => {
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
        await register(form);
  
    }
    return (
 <form onSubmit={handleSubmit}>
    <section className='login'>
    <div className='loginContainer'>
        <h1 className='headingg'>SIGN UP</h1>

    <label>EMAIL</label>
    <input type='text' placeholder="email" id="mail" 
            onChange={(e) => 
            setForm({...form, email: e.target.value})} autoFocus required/>
      <label>USERNAME</label>
    <input id='name' type='text' placeholder="email" id="mail" 
           autoFocus required/>

    <label>PASSWORD</label>
    <input type="password"  placeholder="Password"
            onChange={(e) => 
            setForm({...form, password: e.target.value})} autoFocus required/>
    
    <div className='btnContainer'>
    <button type='submit' >LOGIN</button>
    <button style={{marginTop:"10px"}}onClick={signIn} >SIGN UP WITH GOOGLE</button>
    <Link to='/login'>
    <p>Already Have A Account?</p>
    </Link>
    </div>
    </div>
    </section>
    </form>
    )
}

export default Register;