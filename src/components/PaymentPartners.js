import React from 'react'


function PaymentPartners(props) {
 
    return (
        <div>
        <h2 className="text-lg text-blue-700" >PaymentPartners</h2>
            <ul className="flex flex-wrap hover:border-b-2 ">
                <a href=" "><li className="px-2 text-lg text-blue-700  border-blue-700   m-2" >PayTm</li> </a>
                <a href=" "><li className="px-2 text-lg text-blue-700  border-blue-700   m-2" >MasterCard</li> </a>
                <a href=" "><li className="px-2 text-lg text-blue-700  border-blue-700   m-2" >Visa</li> </a>
                <a href=" "><li className="px-2 text-lg text-blue-700  border-blue-700   m-2" >SbiCards</li> </a>
                
               
                
            </ul>
        </div>
    )
}

export default PaymentPartners
