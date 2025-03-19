import React from "react";

function Navbar() {
    return(
        <div className="navbar">
        <img 
            className="navbar_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
        />
        <img 
            className="navbar_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Avatar"
        />
    </div>
    );
};

export default Navbar;