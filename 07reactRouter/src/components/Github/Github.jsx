import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AnubhavRaj')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div>
      Github Followers:{data.followers};
      <img src={data.avatar_url} alt="Avatar" width={300} />
    </div>
  )
}

export default Github

//more optimised way 

export const githubinfoloader = async () =>{
    const response = await fetch('https://api.github.com/users/AnubhavRaj')
    return response.json();
}
