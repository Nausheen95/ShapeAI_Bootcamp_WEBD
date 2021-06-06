import React from "react";


function Footer(){
  const curentyear= new Date().getFullYear();
  return <div>
          <footer>
        <p> Copy @ {curentyear} </p>
          </footer>
          </div>;
}

export default Footer;