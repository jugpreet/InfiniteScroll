import React, { useEffect, useState } from 'react';

const Memems = ()=>{
const [data, setData]=useState([])
    useEffect(()=>{
        fetchData(20);

        window.addEventListener('scroll', handleScroll);

        return ()=> window.removeEventListener('scroll', handleScroll)
    },[])
    const fetchData = async(count)=>{

        const res = await fetch(`https://meme-api.com/gimme/${count}`)
        const jsonData = await res.json();
        console.log(jsonData, jsonData?.memes)
        setData(data=>[...data,...jsonData?.memes])
    }

    const handleScroll =()=>{

        if(window.scrollY + window.innerHeight >= document.body.scrollHeight)
            {
                fetchData(10)
            }
           console.log(window.scrollY + window.innerHeight > document.body.scrollHeight)
    }


    return <div className='memes'>
        {
        data?.map((ele)=>{
            return <div>
                <img src={ele?.url} atl=""/>
                <span>{ele?.title}</span>
            </div>
        })
        }
    </div>
}

export default Memems;