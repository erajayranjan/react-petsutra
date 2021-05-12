import  React from 'react'
import ReactDOM from 'react-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function SocialLinks(props) {
  
   return (
        <div >
            <ul className="bg-blue-700 flex flex-wrap p-2 text-gray-100 capitalize ">
                <a href={props.Details.url} ><li className="px-3 hover:bg-gray-100 hover:text-blue-700"> {props.Details.name}<FacebookIcon /></li></a> 
                <a href="" ><li className="px-3 hover:bg-gray-100 hover:text-blue-700"> instagram <Instagram /></li></a> 
                <a href="" ><li className="px-3 hover:bg-gray-100 hover:text-blue-700"> twitter <Twitter/></li></a> 
                <a href="" ><li className="px-3 hover:bg-gray-100 hover:text-blue-700"> youtube <YouTubeIcon /></li></a> 
                <a href="" ><li className="px-3 hover:bg-gray-100 hover:text-blue-700"> linkedIn <LinkedInIcon /></li></a> 
            </ul>
            
        </div>
    )
}

export default SocialLinks