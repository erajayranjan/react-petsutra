import React from 'react'

function Availablity() {
    return (
        <div className="w-full bg-blue-700 border-box border md:flex  justify-center md:justify-between text-md md:text-lg font-bold text-blue-50 p-2">
            <h2 className="text-center">
                We are here from Mon-Sat ( 10am to 7pm )
            </h2>
            <div className=" flex justify-between  w-full md:w-1/2 px-8">
                 <h2 className="text-center  capitalize " >
                  <i class="fad fa-phone-volume"></i> 88888888
                  </h2>
                  <h2 className="text-center  capitalize ">
                   <i class="far fa-comment-alt"></i> 9999999
                  </h2>
            </div>  

        </div>
    )
}
export default Availablity