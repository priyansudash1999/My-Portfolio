import React, { act, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {styles} from "../style"
import {logo,menu, close} from "../assets/index"
import {navLinks} from '../constants'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-fit'/>
          <p className='text-white text-[18px] font-bold flex cursor-pointer text-center'>Priyansu Dash</p>
        </Link>
        <ul className='list-none sm:flex hidden flex-row gap-10'>
          {navLinks.map((links)=> (
            <li key={links.id}  
                className={`${active === links.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
              <a 
              href={`#${links.id}`} 
              className='text-[16px] font-medium cursor-pointer'
              onClick={() => setActive(links.title)}
              >
                {links.title}
              </a>
            </li>
          ))}
        </ul>
        {/* for small device use a icon to show off the navbar*/}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(true)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rouned-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((links)=> (
                <li key={links.id}  
                    className={`${active === links.title ? "text-white" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`}>
                  <a 
                  href={`#${links.id}`} 
                  className='text-[16px] font-medium cursor-pointer'
                  onClick={() =>{ 
                    setActive(links.title)
                    setToggle(!toggle)
                  }}
                  >
                    {links.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar