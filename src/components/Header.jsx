import React from "react";

const Header = () => {
  // const scrollToSpot = (x, y) => {
  //   window.scrollTo(x,y);
  // };

  return (
    <header>
      <nav>
        <button onClick={scrollToSpot(0,0)} >Home</button>
        <button>Reviews</button>
        <button>Services</button>
        <button>Location</button>
      </nav>
      <h1>
        VIP Vehicle Detailing <br /> & Power Washing
      </h1>
    </header>
  );
};

export default Header;
