import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="relative md:container mx-auto px-4 flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
                <img src="" className="mr-3 h-8" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-dark ">Travel Near Me </span>
            </Link>
        </div>
    </nav>
  )
}
