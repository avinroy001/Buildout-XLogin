import { useState } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState('');
  const [pass,setPass] = useState('');
  const [readOnly,setReadOnly] = useState(false);
  const [msg,setMsg]=useState(false);
  const check=(e)=>{
    e.preventDefault();
    if(user==='user' && pass==='password'){
      setReadOnly(true);
    }else{
      setMsg(true);
    }
  }
  return (
    <div>
    <h1>Login Page</h1>
    {msg?<p>Invalid username or password</p>:''}
    {readOnly ? (<p>Welcome, {user}!</p>):(
    <form  onSubmit={(e)=>check(e)}>
      <div>
      <label>Username:</label>
      <input type='text' onChange={(e)=>{setUser(e.target.value)}} placeholder='username' required/>
      </div>
      <div>
      <label>Password:</label>
      <input type='text' onChange={(e)=>{setPass(e.target.value)}} placeholder='password' required/>
      </div>
      <button type='submit'>Submit</button>
    </form>
    )
}
    </div>
  )
}

export default App
