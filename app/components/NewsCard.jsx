import Link from 'next/link'
import React from 'react'

const NewsCard = ({value}) => {
  return (
    <div className='flex-1 flex flex-col px-3 py-4 rounded bg-slate-200 gap-2'>
        <h1 className='font-bold text-3xl'>{value.title}</h1>
        <p>Author: {value.author} | Date: {value.createdAt}</p>
        <p>{value.content}</p>
        <div className="flex justify-end">
            <Link href="" className='bg-teal-600 text-white px-3 py-2 rounded'>Read More</Link>
        </div>
    </div>
  )
}

export default NewsCard