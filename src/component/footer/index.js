import React from "react";

let Footer = () => {
  return (
    <>
      <div className="text-center mb-3">
        {/* footer */}
        &copy; {new Date().getFullYear()}. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;