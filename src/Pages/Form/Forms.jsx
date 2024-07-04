import React, { useState } from "react";
import Link from "../../components/layout/Link/Link";
import Button from "react-bootstrap/Button";
import "./Form.css";
import { GoPerson } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import TermsAndConditionsModal from "../../components/layout/Checkbox_with_words/TermsAndConditionsModal";
import Checkbox_with_words from "../../components/layout/Checkbox_with_words/Checkbox_with_words";
// import { Alert } from "react-bootstrap";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setErrors((prevErrors) => ({ ...prevErrors, terms: "" }));
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validate = () => {
    let formErrors = {};

    // Validate name (exactly 2 words, max 45 characters)
    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (formData.name.trim().split(/\s+/).length !== 2) {
      formErrors.name = "Name must contain exactly 2 words";
    } else if (formData.name.length > 45) {
      formErrors.name = "Name must be less than 45 characters";
    }

    // Validate email (must contain '@')
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/@/.test(formData.email)) {
      formErrors.email = "Email must contain '@'";
    }

    // Validate password (at least 1 capital letter, 1 number , 1 special charactor)
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,18}$/.test(formData.password)
    ) {
      formErrors.password =
        "Password must beat least 1 capital letter, 1 number , 1 special charactor";
    }

    // Validate confirm password (must match password)
    if (!formData.confirm_password) {
      formErrors.confirm_password = "Confirm password is required";
    } else if (formData.password !== formData.confirm_password) {
      formErrors.confirm_password = "Confirm password does not match password";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setErrors("Please read and accept the terms and conditions.");
    } else {
      // Proceed with form submission
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
        console.log(formData);
      } else {
        setErrors(validationErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label
        htmlFor="name"
        className="block my-px text-sm text-gray-500 form_label"
      >
        Name
      </label>

      <div className="relative flex items-center w-full up_input ">
        <GoPerson className="absolute text-gray-500 left-3" />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          className="w-full py-2 pl-10 pr-4 border rounded input_field focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
        />
      </div>

      {errors.name && <div className="mt-1 text-red-500">{errors.name}</div>}

      <label
        htmlFor="email"
        className="block my-px text-sm text-gray-500 form_label "
      >
        Email
      </label>
      <div className="relative flex items-center w-full up_input">
        <MdOutlineMail className="absolute text-gray-500 left-3" />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="w-full py-2 pl-10 pr-4 border rounded input_field focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
        />
      </div>

      {errors.email && <div className="mt-1 text-red-500">{errors.email}</div>}

      <label
        htmlFor="password"
        className="block my-px text-sm text-gray-500 form_label "
      >
        Password
      </label>
      <div className="relative flex items-center w-full up_input">
        <RiLockPasswordLine className="absolute text-gray-500 left-3" />
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          className="w-full py-2 pl-10 pr-10 border rounded input_field focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute cursor-pointer right-3 top-3"
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {errors.password && (
        <div className="mt-1 text-red-500">{errors.password}</div>
      )}

      <label
        htmlFor="confirm_password"
        className="block text-sm text-gray-500 form_label "
      >
        Confirm password
      </label>

      <div className="relative flex items-center w-full up_input">
        <RiLockPasswordLine className="absolute text-gray-500 left-3" />
        <input
          type={confirmPasswordVisible ? "text" : "password"}
          placeholder="Confirm password"
          value={formData.confirm_password}
          onChange={handleChange}
          name="confirm_password"
          className="w-full py-2 pl-10 pr-10 border rounded input_field focus:outline-none focus:ring-2 focus:shadow-outline hover:bg-blue-100"
        />
        {formData.confirm_password && (
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="absolute cursor-pointer right-3 top-3"
          >
            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>

      {errors.confirm_password && (
        <div className="mt-1 text-red-500">{errors.confirm_password}</div>
      )}
      <div className={isModalOpen ? "blur-background" : ""}>
        <Checkbox_with_words
          onCheckboxChange={handleCheckboxChange}
          label= "I agree to the"
        // cls="to-blue-700" &nbsp
         
          linkText="Terms and Conditions"
          linkUrl="#"
        />
        {/* <TermsAndConditionsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        /> */}
      </div>

      {/* {error && <p className="text-red-500">{error}</p>} */}

      <Button
        type="submit"
        variant="primary"
        disabled={!isChecked}
        className="w-full button_signup"
      >
        Sign Up
      </Button>
      {setErrors && <div className="mt-1 text-red-500">{setErrors}</div>}

      <Link
        linkText="Login"
        label="Already Have a Account! "
        href="/src/Pages/Signin/Signin.jsx"
        text=""
        linkUrl="./../Signin/Signin.jsx"
      />
      
    </form>
  );
};

export default Forms;
