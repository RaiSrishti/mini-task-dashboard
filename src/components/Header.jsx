function Header({ darkMode, setDarkMode }) {
    return (
      <div className="header">
        <h1>Interactive Task Dashboard</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
  }
  
  export default Header;