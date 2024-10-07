import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='flex justify-center bg-gray-700 text-2xl p-2 text-white'>User: {id}</div>
  )
}

export default User