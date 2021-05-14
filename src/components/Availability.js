import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';

function Availablity() {
  return (
    <div className="w-full bg-blue-700  md:flex  justify-center md:justify-between text-md md:text-lg font-bold text-blue-50 p-2">
      <h2 className="text-center antialiased  ">
        We are here from Mon-Sat ( 10am to 7pm )
      </h2>
      <div className=" flex justify-between  w-full md:w-1/2 md:px-8 ">
        <h2 className="text-center  capitalize hover:text-blue-700 hover:bg-blue-50 ">
          <PhoneIcon /> <a href="tel:+919873107342">919873107342</a>
        </h2>
        <h2 className="text-center  capitalize hover:text-blue-700 hover:bg-blue-50 ">
          <MessageIcon /> <a href="sms:+919873107342">919873107342</a>
        </h2>
      </div>
    </div>
  );
}
export default Availablity;
