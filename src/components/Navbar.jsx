import React from 'react'
import todoLogo from '../assets/todoLogo.png'

const navbar = () => {
return (
    <>
        <div className="navbar bg-violet-900 flex justify-between items-center p-4 text-white ">
            <div className="links flex justify-between w-1/4">
                <img src={todoLogo} alt="logo" className='w-1/12 h-1/12 rounded'/>
                <div>Home</div>
                <div>My-Tasks</div>
                <div>Services</div>
                <div >About</div>
            </div>
        </div>
    </>
)
}

export default navbar;