import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();
  //piece of code which runs based on the conditions
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser=>{
      if(authUser){
        //user is logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    
    return()=>{
      //any clean up
      unsubscribe();
    }
  }, [])
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path='/'>
            <Header/>
            <Home/>
          </Route>

          <Route path='/login'>
            <Login/>
            <h1>Login page</h1>
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
