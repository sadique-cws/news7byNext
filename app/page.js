import React, { Suspense } from 'react'
import Sidebar from './components/Sidebar'
import NewsCard from './components/NewsCard'

const page = async () => {
  let callingNews = await fetch("http://127.0.0.1:3000/api/post");
  callingNews = await callingNews.json();

  return (
    <div className='flex'>
        <div className='w-2/12 bg-slate-200 h-[93vh]'>
            <Sidebar/>
        </div>
        <div className='w-10/12 bg-sky-50 p-5 flex flex-col gap-2'>
            {callingNews.data.map((value, key) => (<NewsCard value={value} key={key}/>))}
        </div>
    </div>
  )
}

export default page