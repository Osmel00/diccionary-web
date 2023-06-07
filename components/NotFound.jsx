import React from 'react'

const NotFound = ({title,message,resolution}) => {
  return (
    <div className='mt-24 flex flex-col space-y-8 items-center'>
        
       <span className='text-6xl'>😕</span> 
       <p className='font-bold dark:text-white'>{title}</p>
       <p className='text-center dark:text-[#757575]'>{message} {resolution}</p> 
    </div>
  )
}

export default NotFound