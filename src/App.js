import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Login from './components/Login';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
