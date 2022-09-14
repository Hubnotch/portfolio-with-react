import Pages from './Pages'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [user,setUser] = useState(null)

useEffect(()=>{
  fetch('https://gitconnected.com/v1/portfolio/hubnotch')
  .then(res=> res.json())
  .then(userData=> setUser(userData))

},[])
// console.log(user)

if(!user){
  return <div />
}

  return (
   <Pages user={user} />
  );
}

export default App;
