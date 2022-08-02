import './App.css';
import { signInWithGoogle } from './firebase/firebase'
import React from 'react';
import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Switch } from 'react-router-dom';
import Chat from './components/Chat'

function App() {

  const {user, authIsReady} = useAuthContext()

  return (
      <div className="App">
        {authIsReady && (
          <>
            <Navbar />
            <Chat />
          </>
        )}
      </div>
  );
}

export default App;
