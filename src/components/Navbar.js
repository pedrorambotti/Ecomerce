import React from "react";

const Navbar = () => {
  let imgUrl =
    "https://image.freepik.com/vector-gratis/colorido-logo-mercado-gradiente_23-2148472540.jpg";
  return (
    <nav>
      <div />
      <div>
        <h1> Grand Market On-Line</h1>
      </div>
      <div>
        <img src={imgUrl} alt="ecomerce-logo " className="navbar-image" />
      </div>
      <div>{}</div>;
    </nav>
  );
};

export default Navbar;
