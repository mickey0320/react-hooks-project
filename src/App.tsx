import React, { useEffect } from 'react';
import { useAuth } from './context/authContext';
import AuthorizeApp from './container/authorize'
import UnAuthorizeApp from './container/unauthorize'

function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      {user ? <AuthorizeApp /> : <UnAuthorizeApp />}
    </div>
  );
}

export default App;
