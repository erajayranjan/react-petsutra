import React from "react";
import ReactDOM from "react-dom"

export default function NavLinks(){
  return (
    <div className="">
    <ul className="flex gap-1 sm:gap-2 ">
        <li className=" px-2 py-1 hover:text-yellow-100 capitalize " >home</li>
        <li className=" px-2 py-1 hover:text-yellow-100 capitalize " >products</li>
        <li className=" px-2 py-1 hover:text-yellow-100 capitalize " >about</li>
        <li className=" px-2 py-1 hover:text-yellow-100 capitalize " >contact</li>
    </ul>
    </div>
  )
}



