import React from 'react'

function FooterMenu() {
    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-2 mx-auto px-8 px-auto sm:px-2 border-b-2 border-gray-500">
{/*            
            <div className="flex justify-center gap-8 "> */}
                <div className="border-b-2 pt-2  pb-4 sm:border-r-2">
                  <ul>
                    <li>  
                        <h3 className="text-lg text-blue-700 ">Your's PetSutra Profile </h3>             
                    </li>
                    <li>  CopCash & Rewards               </li>
                    <li>  Wishlist              </li>
                    <li>  Returns              </li>
                    <li>  Your Orders              </li>
                    <li>  Contact US              </li>
                  </ul>
                </div>
                <div className="border-b-2 pt-2  pb-4 sm:border-r-2">
                    <ul>
                      <li>  <h3 className="text-lg text-blue-700 ">About Us </h3>           </li> 
                      <li>  Shipping Policy           </li> 
                      <li>  Return Policy           </li> 
                      <li>  Work with Us           </li> 
                      <li>  Rise for the Stray           </li> 
                      <li>  FAQs           </li> 
                    </ul>
                </div>
            {/* </div>
            <div className="flex justify-center gap-8"> */}
                <div className="border-b-2 pt-2  pb-4 sm:border-r-2">
                  <ul>
                      <li>  <h3 className="text-lg text-blue-700 ">Business Queries </h3>          </li> 
                      <li>  Sell on PetSutra           </li> 
                      <li>  Donate for Pets           </li> 
                      <li>  Blog           </li> 
                      <li>  Coupons           </li> 
                    
                  </ul>
                </div>
                <div className="border-b-2 pt-2  pb-4 sm:border-r-2">
                    <ul>
                      <li>  <h3 className="text-lg text-blue-700 ">Connect  With Us. </h3>           </li> 
                    
                    </ul>
                    <h2>Address</h2>
                    #123, nth Floor, sector X, Gurgaon - 122001
                </div>
            {/* </div> */}
        </div>
    )
}
export default FooterMenu