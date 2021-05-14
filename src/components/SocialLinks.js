import React from 'react';
import ReactDOM from 'react-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function SocialLinks(props) {
  return (
    <div>
      <ul className="bg-blue-700 flex flex-wrap  text-gray-100 capitalize ">
        <a href={props.Details.url}>
          <li className="flex justify-center items-center p-2 h-12 w-12 rounded-full  hover:bg-gray-100 hover:text-blue-700">
            {' '}
            <FacebookIcon />
          </li>
        </a>
        <a href="">
          <li className="flex justify-center items-center p-2 h-12 w-12 rounded-full  hover:bg-gray-100 hover:text-blue-700">
            {' '}
            <Instagram />
          </li>
        </a>
        <a href="">
          <li className="flex justify-center items-center p-2 h-12 w-12 rounded-full  hover:bg-gray-100 hover:text-blue-600">
            {' '}
            <Twitter />
          </li>
        </a>
        <a href="">
          <li className="flex justify-center items-center p-2 h-12 w-12 rounded-full  hover:bg-gray-100 hover:text-red-700">
            {' '}
            <YouTubeIcon />
          </li>
        </a>
        <a href="">
          <li className="flex justify-center items-center p-2 h-12 w-12 rounded-full  hover:bg-gray-100 hover:text-blue-800">
            {' '}
            <LinkedInIcon />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default SocialLinks;
