import React from "react"
import UsefulLinks from "./UsefulLinks"
import SignIn from "./SignIn"
import SocialLinks from "./SocialLinks"
import BackToTop from "./BackToTop"
import Availability from "./Availability"
import PetParentingBanner from "./PetParentingBanner"
import FooterMenu from "./FooterMenu"
import PaymentPartners from "./PaymentPartners"



import FacebookIcon from '@material-ui/icons/FacebookIcon';

export default function Footer(){
   const SocLinks={name:"facebook",url:"facebook.com",style:{color:"bg-yellow-500", size:"text-lg" }}
  const date=new Date().getFullYear();
  return (
    <div className="bg-gray-50">
      <div>
        
        
        <PetParentingBanner />
        <FooterMenu />
        <UsefulLinks />
        <SocialLinks Details={SocLinks} />
        <PaymentPartners />
        <div className="flex justify-between items-center bg-blue-700">
            <div className="sm:flex justify-between items-center">
                <Availability />
            </div>
            <div className="sm:flex justify-between items-center">
                <BackToTop />
            </div>
        </div>  

        
      </div>
      <div className="border-box border-t-2 border-gray-500 h-24 flex items-center justify-center">
        <h4 className=" static bottom-0 text-gray-800">
            Copyright &copy; {date} PetSutra
        </h4>
      </div>
    </div>
  );
}
