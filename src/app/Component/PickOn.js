import React, { useState } from 'react'

function PickOn() {
     const [isOpen, setIsOpen] = useState(false);
     const Open = () =>{
      setIsOpen(true);
     }
     const close = () =>{

     }
     const handleOutSideClick = () =>{
        
     }
  return (

    <div>
      <div onClick={Open}>
        <h1>pick on</h1>
      </div>
      {
        isOpen &&(
        <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 inset-0 w-2/4 h-1/3 flex items-center justify-center bg-black bg-opacity-70 z-[9]">
            <h1>deliver now</h1> 
                        <h1>deliver later</h1>            
           
          </div>
        )
      }
    </div>
  )
}

export default PickOn
