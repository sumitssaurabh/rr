import React from "react";
// import "./Term_condition.css";

const Checkbox_with_words = ({cls,text, className, onCheckboxChange,  label, linkText, linkUrl }) => {
  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked);
  };
  return (
    <div className="flex">
      <h6 className="font-light i flex">
        <span>  
          <input
            className= "ml-1.5 text-white bg-black checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
        </span>{" "}
        <h6 className="cls">
        {/* ml-1.5 text-blue-800 */}
          {label}{" "}</h6>
        <a href={linkUrl}  className={className}>
          {linkText}</a>
        <h6 className={className}>{ text}</h6>  
      </h6>
    
    </div>
  );
};

export default Checkbox_with_words;