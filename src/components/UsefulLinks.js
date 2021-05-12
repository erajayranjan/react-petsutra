import React from 'react'


function UsefulLinks(props) {
 
    return (
        <div>
        <h2 className="text-lg " >Useful Links</h2>
            <ul className="flex flex-wrap hover:border-b-2 ">
                <li className="px-2 text-lg font-bold hover:border-b-2 hover:border-blue-700  text-blue-700  border-blue-700   m-2" ><a href=" ">Diet Calculator </a></li>
                <li className="px-2 text-lg font-bold hover:border-b-2 hover:border-blue-700  text-blue-700  border-blue-700   m-2" ><a href=" ">Pet Insurance </a></li>
                <li className="px-2 text-lg font-bold hover:border-b-2 hover:border-blue-700  text-blue-700  border-blue-700   m-2" ><a href=" ">About Us </a></li>
                <li className="px-2 text-lg font-bold hover:border-b-2 hover:border-blue-700  text-blue-700  border-blue-700   m-2" ><a href=" ">Shipping </a></li>
                <li className="px-2 text-lg font-bold hover:border-b-2 hover:border-blue-700  text-blue-700  border-blue-700   m-2" ><a href=" ">Return & Refund Policy</a>
</li>               
                
            </ul>
        </div>
    )
}

export default UsefulLinks
