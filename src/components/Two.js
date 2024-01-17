import React, { useContext } from 'react'
import { Abdou } from '../App';

 const Two = () => {
    const n = useContext (Abdou)
  return (
   <>
    
    <h1>{n}</h1>

   </>
    
  )
};
export default Two;