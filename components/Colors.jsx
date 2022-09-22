import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import {useState} from 'react'


const Colors = ({active, setActive, color}) => {

    


  return (

    
    <div style={{backgroundColor: color}} className={` flex items-center justify-center h-[24px] w-[24px] rounded-full cursor-pointer opacity-50 ${ active === color && 'opacity-100'}`} onClick={() => { if(color !== active) setActive(color); else setActive(null)}} >
           { active === color && <CheckIcon className='text-white' sx={{
            fontSize:14
           }} />}     
    </div>
  )
}

export default Colors