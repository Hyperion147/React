import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/hyperion147")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
  )
}

export default Github

export const githubLoader = async() => {
    const response =  await fetch('https://api.github.com/users/hyperion147')
    return response.json()
}