import React, {useState} from 'react';

const Navbar = () => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };
      
      return (

        
        <div className="navbar">
          <div className="links">
           <a href="/" id="logo">LOGO</a>
          <a href="">Menu</a>
          <a href="">Menu</a>
          <a href="">Menu</a>
          <a href="">Menu</a>
          </div>
        

        <div>
        <div onClick={toggle} className="profile">
        </div>
          {open && (
            <div className="toggle">
               <div   className="colapse">
         <ul>
            <li>
            
              <div className="pic"></div>
              <div className="settings">
                <h2>My Profile</h2>
              <p>Change settings of your account</p>
              </div>
              
              </li>
            <li>
              <div className="logout">
                 <div className="log"></div> 
              <span>Logout</span>
              </div>
             
            </li>
          </ul>
       </div>

            </div>
          )}
        </div>
        </div>
      );

  }
  export default Navbar;