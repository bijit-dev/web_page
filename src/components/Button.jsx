import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-transparent hover:bg-orange-600  duration-300 border-2 border-[#3E406D] py-4 px-12 rounded-[40px] text-base text-white font-pop font-meduim sm:text-lg md:text-lg font-bold font-robo py-2 px-5 lg:py-4 lg:px-9 ${className}`}>{text}</button>
    
  )
}

export default Button