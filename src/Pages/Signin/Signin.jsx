import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LogoHeader from "../../components/common/Logo/LogoHeaderG1";
import Button_ from "../../components/common/Button/Button";
import Button from "react-bootstrap/Button";
import googleLogo from "../../assets/photo/google_img.png";
import Right_img from "../../components/layout/Rightside/Right_side";
import LanguageSelector from "../../components/common/Language/LanguageSelector";
import WelcomeMessage from "../../components/common/Logo/WelcomeMessage";
import Divider from "../../../src/components/layout/Divider/Divider";
import "./Signin.css";
import Right_side from "../../components/layout/Rightside/Right_side";
import Checkbox_with_words from "../../components/layout/Checkbox_with_words/Checkbox_with_words";
import Link from "../../components/layout/Link/Link";

const Signin = () => {
  const [showGoogleSignup, setShowGoogleSignup] = useState(true);
  const [isRemembered, setIsRemembered] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  //   if (!e.target.value.includes('@')) {
  //     setEmailError('Please enter a valid email address');
  //   } else {
  //     setEmailError('');
  //   }
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   // Additional password validations can be added here
  // };

  return (
    <div className="flex flex-col w-full h-screen lg:flex-row">
      <div className="flex-col justify-center mt-3.5 p-8 lg:w-1/2">
        {/* flex flex-col justify-center p-8 bg-gray-100 lg:w-1/2 */}
        <LanguageSelector />
        <br />
        <LogoHeader />
        <WelcomeMessage
          cls="text-2xl font-semibold mt-4"
          text="Hi, Welcome Back!"
        />
        <br />
        {showGoogleSignup && (
          <Button_
            className="mt-4"
            logo={googleLogo}
            backgroundColor="white"
            textColor="black"
            border="1px solid black"
            text="Sign in with Google"
          />
        )}
        <Divider
          cls=" text-sm font-semibold my-4  ml-[12vw] relative "
          text="or sign in with E-mail !"
        />
        {/* <div className=" ml-3.5 my-4 text-sm font-semibold">or sign in with Email</div> */}
        <label htmlFor="email" className="block my-4 text-sm text-gray-500">
          Email
        </label>
        <div className="relative flex items-center w-full ">
          <MdOutlineMail className="absolute text-gray-500 left-3" />
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleEmailChange}
            className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
            placeholder="Email"
          />
        </div>
        {/* {emailError && <div className="mt-1 text-sm text-red-500">{emailError}</div>} */}
        <label htmlFor="password" className="block my-4 text-sm text-gray-500 ">
          Password
        </label>
        <div className="relative flex items-center w-full mt-1">
          <RiLockPasswordLine className="absolute text-gray-500 left-3" />
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handlePasswordChange}
            className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
            placeholder="Password"
          />
        </div>
        {/* {passwordError && <div className="mt-1 text-sm text-red-500">{passwordError}</div>} */}
        {/* <button className="mt-4 text-blue-500" onClick={handleForgotPassword}>
          Forgot your password?
        </button> */}
        <br />
        <div className="flex">
          <Checkbox_with_words
            onCheckboxChange={setIsRemembered}
            label="Remember Me"
            cls="to-blue-700"
          />

          <Link
            label=""
            linkText="Forgot your password?"
            href="/forgot-password"
            //  href="/src/Pages/Signup/Signup.jsx"
            className=" forgot_password text-blue-700 cursor-pointer"
            // linkUrl="#"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          // disabled={!isChecked}
          className="w-full my-4 button_signup"
        >
          Sign in
        </Button>

        <Link
          cls="text-zinc-800"
          label="Not Register Yet!"
          linkText="Create an Account"
          href="/"
          //  href="/src/Pages/Signup/Signup.jsx"
          className="text-blue-700 cursor-pointer"
          linkUrl="#"
        />
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

export default Signin;
