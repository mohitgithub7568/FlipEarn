import React from 'react'

const Title = ({title,description}) => {
  return (
    <div className='flex flex-col items-center justify-center mb-8'>
      <h3 className='text-2xl font-bold text-gray-800'>{title}</h3>
      <p className='text-gray-600 max-w-[500px]'>{description}</p>
    </div>
  )
}

export default Title
