import React, { useState } from "react";
// import LanguageSelector from "../../components/common/Language/LanguageSelector";
import LogoHeader from "../../components/common/Logo/LogoHeaderG1";
// import WelcomeMessage from "../../components/common/Logo/WelcomeMessage";
import Button from "../../components/common/Button/Button";
import googleLogo from "../../assets/photo/google_img.png";
import Divider from "../../components/layout/Divider/Divider";
import Forms from "../Form/Forms";
import Right_side from "../../components/layout/Rightside/Right_side";
import LanguageSelector from "../../components/common/Language/LanguageSelector";
import WelcomeMessage from "../../components/common/Logo/WelcomeMessage";
import Right_img from "../../assets/photo/right_side.png"
import "./Signup.css";

const Signup = () => {
  const [showGoogleSignup, setShowGoogleSignup] = useState(true);

  return (
    <div className="flex flex-col w-full h-screen lg:flex-row ">
      <div className="flex flex-col justify-center bg-gray-100 left_side lg:w-1/2">
        <LanguageSelector />
        <br />
        <br />
        <LogoHeader />
        <br />
        <WelcomeMessage
              // style={{ marginLeft: "200px" }}
          cls=" text-2xl   font-semibold ml-[3vw] relative"
          text=" Hi, Welcome to Freight Management System!"
        />
        <br />
        {showGoogleSignup && (
          <Button
            className="button_google text-decoration-none mar"
            logo={googleLogo}
            backgroundColor="white"
            textColor="black"
            border="1px solid black"
            disabled
            cursor="pointer"
            text="Sign up with google"
          ></Button>
        )}
{/* className="ml-[170px] mt-[14px]" */}
<br />
        <Divider 
          cls=" text-sm font-semibold  ml-[12vw] relative "
          text="or sign up with E-mail !"/>
        <Forms />
      </div>
      <div className="flex items-center justify-center w-full bg-gray-200 right_side lg:w-1/2">
        {/* <Right_img /> */}
        <Right_side
          imageSrc={Right_img}
          altText="Description of the image"
          className="custom-size-class"
        />{" "}
      </div>
    </div>
  );
};

export default Signup;
