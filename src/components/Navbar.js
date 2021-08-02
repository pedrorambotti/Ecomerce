import React from "react";

const Navbar = () => {
  let imgUrl =
    "https://img2.pngdownload.id/20180412/dgw/kisspng-gemstone-computer-icons-symbol-logo-diamond-shape-5ad02314a01695.7081262415235899086557.jpg";
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
