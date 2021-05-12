import  React from 'react'
import ReactDOM from 'react-dom'

function SocialLinks(props) {
  
   return (
        <div >
            <ul className="bg-blue-700 flex flex-wrap p-2 text-gray-100 capitalize">
                <a href={props.Details.url} ><li className= {...props.Details.style} > {props.Details.name} </li></a> 
                <a href="" ><li className="px-3"> instagram </li></a> 
                <a href="" ><li className="px-3"> twitter</li></a> 
                <a href="" ><li className="px-3"> youtube</li></a> 
                <a href="" ><li className="px-3"> linkedIn</li></a> 
            </ul>
        </div>
    )
}

export default SocialLinks