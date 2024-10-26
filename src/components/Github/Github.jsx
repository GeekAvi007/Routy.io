
import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/GeekAvi007')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt='DP' width={300}></img>
     </div>
  )
}

export default Github