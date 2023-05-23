import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { analytic } from '../firebase'
import { getAnalytics, logEvent } from "firebase/analytics";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className="logo">Demo Chat N2</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>{
          signOut(auth);
          logEvent(analytic, 'logout');
          }}>logout</button>
      </div>
    </div>
  )
}

export default Navbar