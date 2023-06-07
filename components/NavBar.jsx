
import React from 'react'
import SelectFont from './SelectFont'
import LineVertical from './LineVertical'
import Toggle from './Toggle'
import LogoSVG from './Logo'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center mb-12 relative '>
        <LogoSVG />
        <div className='flex gap-6 items-center'>
        <SelectFont/>
        <LineVertical/>
        <Toggle/>
        </div>
       
    </div>
  )
}

export default NavBar