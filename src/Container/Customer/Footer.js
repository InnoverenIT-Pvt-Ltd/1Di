import React from 'react'

export const Footer = () => {
  return (
    <div className="w-wk absolute bottom-0">
   <hr class=" mt-4 w-auto ml-0 h-1 mx-auto   bg-black border-0 rounded " />
      <div class="text-sm flex justify-center  text-gray-700  w-wk items-center" >
         © {new Date().getFullYear()} {` `}  1Di inc
      </div>  
      </div> 
  )
}
