import { useState } from 'react'

import './App.css'

function App() {
  let u='user';
  let p='password';
  const [user, setUser] = useState('');
  const [pass,setPass] = useState('');
  const [readOnly,setReadOnly] = useState(false);
  const [msg,setMsg]=useState(false);
  const check=(e)=>{
    e.preventDefault();
    if(u===user.trim() && p===pass.trim()){
      setReadOnly(true);
    }else{
      setMsg(true);
    }
  }
  console.log(user);
  console.log(pass);
  return (
    <>
    <h1>Login Page</h1>
    {msg?<p>Invalid username or password</p>:''}
    {readOnly ? (<p>Welcome, user!</p>):(
    <form className='form' onSubmit={(e)=>check(e)}>
      <label>Username:<input type='text' onChange={(e)=>{setUser(e.target.value)}} placeholder='username' required/></label>
      <label>Password:<input type='text' onChange={(e)=>{setPass(e.target.value)}} placeholder='password' required/></label>
      <button type='submit'>Submit</button>
    </form>
    )
}
    </>
  )
}

export default App
