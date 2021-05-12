import React from 'react'


function PaymentPartners(props) {
 
    return (
        <div>
        <h2 className="text-lg " >We accept</h2>
            <ul className="flex flex-wrap hover:border-b-2 ">
                <a href=" "><li className="px-2 text-lg text-blue-700  border-blue-700   m-2" >PayTm</li> </a>
                <a href=" "><li className="px-2 text-xl   text-blue-700  border-blue-700   m-2" ><i class="fab fa-cc-mastercard" style={{fontSize:100}}></i>
                </li> </a>
                <a href=" "><li className="px-2 text-lg text-blue-700  border-blue-700   m-2" ><i class="fab fa-cc-visa" style={{fontSize:100}}></i></li> </a>
                <a href=" "><li className="px-2 text-lg text-blue-700  border-blue-700   m-2" ><i class="fab fa-cc-amex"  style={{fontSize:100}}></i></li> </a>
                
                
               
                
            </ul>
        </div>
    )
}

export default PaymentPartners
