  
import './App.css';
import { BrowserRouter ,Switch, Route, Redirect } from 'react-router-dom';
import Chat from './Components/Chat';
import Signin from './Components/Signin';
import Register from './Components/Register';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
  <BrowserRouter>
                <Switch>
                    <Route 
                        path="/login"
                        render={ () => {
                            if (user){
                                return(
                                    <Redirect to="/"/>
                                )
                            }
                            else {
                                return(
                                    <Signin/>
                                )
                            }
                        }}
                    />
                     <Route 
                        path="/signup"
                        render={ () => {
                            if (user){
                                return(
                                    <Redirect to="/"/>
                                )
                            }
                            else {
                                return(
                                    <Register/>
                                )
                            }
                        }}
                    />
                                        <Route 
                        path="/"
                        render={() => {
                            if (!user) {
                                return (
                                    <Redirect to="/login"></Redirect>
                                )
                            }
                            else {
                                return (
                                    <Chat/>
                                )
                            }
                        }}
                    />
                    </Switch>
                    </BrowserRouter>

  );
}

export default App;