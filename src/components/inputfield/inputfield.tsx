import React from 'react'
import { Field, ErrorMessage } from 'formik';

interface IInputfield{
    label:string,
    name:string,
    type?:string|boolean,
    className?:string,
    icon?:React.ReactNode
}

const Inputfield:React.FC<IInputfield> = ({label,name,type,className,icon}) => {
  return (
    <div className={className}>
        <label htmlFor={name}>{label}</label>
       <div className='flex flex-col  '>
        <div className='flex items-end'>
       <span>{icon}</span>
        <Field type={type} name={name} className='flex flex-col  outline-none border-b-2 border-wenge w-full ml-2' />
        </div>
        <ErrorMessage name={name} className='text-red-600 ml-6' component='div'/>
        </div>
        
    </div>
  )
}

export default Inputfield