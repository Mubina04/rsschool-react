import React, { FC } from 'react'
interface IInput{
    type?: "text" | "password" | "number" | "email" | "date";
    label?: string;
    placeholder?: string;
    inputWidth?: any;
    name?:string;
}
const Input:FC<IInput> = ({type, label, placeholder, inputWidth, name}) => {
  return (
    <div className='mb-3'>
        <input name={name} className='lg:py-[18px] px-2 py-1 md:py-3 md:px-2 lg:px-4 rounded-lg  md:rounded-[1.25rem] border border-[#1C1F35] w-full text-xl tracking-[0.9px] mb-[1.875rem]' type={type} placeholder={placeholder}  />
    </div>
  )
}

export default Input