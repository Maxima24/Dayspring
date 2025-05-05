import React from 'react'
import daySpringLogo from "../../assets/daySpringLogo.png"
import Button from '../../components/Button'
<<<<<<< Updated upstream
=======
// import store from './store'
>>>>>>> Stashed changes

function NavLayout() {
  return (
    <div className='flex items-center justify-between
px-4 py-4
w-full h-20
absolute top-0 left-0 bg-transparent



z-20
border-b border-t border-stone-800 rounded-md
'>
    <div>
    <ul className='flex items-center'>
    <img src={daySpringLogo} className=' h-auto w-36'/>
    <li><Button type={"secondary"}>Home</Button></li>
    </ul>
    </div>
      
            <div>
            <ul  className='flex items-center gap-4 mr-2'>
            <Button type={"secondary"}>Sign-up</Button>
            <Button type={"secondary"}>Login</Button>
            
           
            </ul>
            </div>
    </div>
  )
}

export default NavLayout