import React from "react";
import "./Link.css";

const Link = ({ cls,className,label, linkText, linkUrl}) => {
  return (
    <h6 className={cls}>
       {label}{" "}
        <a className ={className} href={linkUrl} >
        {/* <RouterLink className={className} to={linkUrl}> */}
          {linkText}
          {/* </RouterLink> */}
        </a>  
    </h6> 
  );
};

export default Link;
