import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        id="header"
        className="w-full flex flex-row justify-between mb-4 text-white"
      >
        <h1>Calc</h1>
        <div id="swtiches">
          <h3>THEME</h3>
          <button id="themeSwitch">1</button>
          <button id="themeSwitch">2</button>
          <button id="themeSwitch">3</button>
        </div>
      </div>
    );
  }
}

export default Header;
