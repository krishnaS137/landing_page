import React from 'react'

const InfinityCards = ({image,content}:{image:string,content:string}) => {
  return (
    <div className='w-full text-white rounded-3xl shadow-[5px_5px_20px_0_rgba(0,0,0,0.1)] p-5 text-2xl justify-center items-center h-30 bg-blue-400 '>
        <div className='flex-col justify-between'>
            <div className='flex-1'>
                <img src={image} alt="Image" className='m-2 p-2 rounded-full size-10 justify-start items-start' />
            </div>
            <p className='flex-2 justify-center items-center text-sm'>{content}</p>
        </div>
    </div>
  )
}

export default InfinityCards