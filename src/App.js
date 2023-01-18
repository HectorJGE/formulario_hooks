import { useState } from 'react';
import './App.css';

function App() {
  const [username,setUsername] = useState("John")
  const [lastname,setLastname] = useState("Smith")
  const [email,setEmail] = useState("johnsmith@johnsmith.com")
  const [password,setPass] = useState("password")
  const [confirmPass,setConfirmPass] = useState("password")

  const Actualizar = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
        <div>
          <form onSubmit={Actualizar}>
            <div className='cont'>
              <label> First Name: </label>
              <input type='text' onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='cont'>
              <label> Last Name: </label>
              <input type='text' onChange={(e) => setLastname(e.target.value)}/>
            </div>
            <div className='cont'>
              <label> Email: </label>
              <input type='text' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='cont'>
              <label> Password: </label>
              <input type='password' onChange={(e) => setPass(e.target.value)}/>
            </div>
            <div className='cont'>
              <label> Confirm Password: </label>
              <input type='password' onChange={(e) => setConfirmPass(e.target.value)}/>
            </div>

          </form>
          <h5>Your Form Data</h5>
          <label>First Name: </label>{username}
          <br></br>
          <label>Last Name: </label>{lastname}
          <br></br>
          <label>Email: </label>{email}
          <br></br>
          <label>Password: </label>{password}
          <br></br>
          <label>Confirm Password: </label>{confirmPass}
        </div>
    </div>
  );
}

export default App;
