import React from 'react';


//importing darkMode and Toggle hook ({Prop1, prop2})
const Navbar = ({ darkMode, toggleMode }) => {
  //added this to index.js change from setdarkMode to toggleMode
  // const [darkMode, setDarkMode] = useState(false);
    // added this to useDarkMode.js as instructed
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
