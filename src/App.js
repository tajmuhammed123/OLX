import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the 'Routes' component

import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Components/Login/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Post from './store/postContext'

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Routes> {/* Use the 'Routes' component to wrap your routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view" element={<View />} />
            {/* Add more routes here using the same pattern */}
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
