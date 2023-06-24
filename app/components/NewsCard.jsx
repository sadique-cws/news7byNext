"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const NewsCard = ({value,read}) => {
  const router = useRouter();

  const handleDelete = async (id) => {
        let data = await fetch(`/api/post/${id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json",
          }
        })
        data = await data.json();
        // alert(data.msg)
        router.push("/")
  }

  const handleUpdate = async (id) => {

  }

  return (
    <div className='flex-1 flex flex-col px-3 py-4 rounded bg-slate-200 gap-2'>
        <h1 className='font-bold text-3xl'>{value.title}</h1>
        <p>Author: {value.author} | Date: {value.createdAt}</p>
        <p>{value.content}</p>
        <div className="flex justify-end">
            {read && <Link href={`/view/${value._id}`} className='bg-teal-600 text-white px-3 py-2 rounded'>Read More</Link>}
            {!read && <button onClick={() => handleDelete(value._id)} className='bg-red-500 text-white hover:bg-red-800 px-3 py-2 rounded'>Delete</button>}
            {!read && <Link href={`/update/${value._id}`} className='bg-green-600 ml-2 text-white px-3 py-2 hover:bg-green-900 rounded'>Edit</Link>} 
        </div>
    </div>
  )
}

export default NewsCard