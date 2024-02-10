import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className='flex mt-5 gap-10'>
      <div className='w-3/4'>
        <input type='text' className='border w-full' placeholder='Title' />
       <div className='mt-5'>
       <ReactQuill theme="snow" value={value} onChange={setValue} className='h-72'/>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='border border-slate-900 p-3'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type='file' id='file' name='file' className='mb-3' />
          <div className='flex justify-between'>
            <button className='bg-blue-600 px-2 text-white py-1 border border-slate-950 rounded-lg hover:bg-amber-500 hover:text-black'>Save as a Draft</button>
            <button className='bg-green-700 text-white px-2 py-1 border border-slate-950 rounded-lg hover:bg-green-900'>Update</button>
          </div>
        </div>
        <div className='border border-slate-900 p-3'>
          <h1 className='text-2xl font-semibold underline text-rose-800'>Catogory</h1>
          <div className='flex flex-col text-fuchsia-800 font-bold text-lg'>
            <div>
              <lable htmlFor='art'>Art : </lable>
              <input type='radio' name='cat' value='art' id='art' />
            </div>
            <div>
              <lable htmlFor='Science'>Science : </lable>
              <input type='radio' name='cat' value='Science' id='Science' />
            </div>
            <div>
              <lable htmlFor='Technology'>Technology : </lable>
              <input type='radio' name='cat' value='Technology' id='Technology' />
            </div>
            <div>
              <lable htmlFor='Cinema'>Cinema : </lable>
              <input type='radio' name='cat' value='Cinema' id='Cinema' />
            </div>
            <div>
              <lable htmlFor='Design'>Design : </lable>
              <input type='radio' name='cat' value='Design' id='Design' />
            </div>
            <div>
              <lable htmlFor='Food'>Food : </lable>
              <input type='radio' name='cat' value='Food' id='Food' />
            </div>           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write;