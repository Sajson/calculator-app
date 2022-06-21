import React from "react";

function Header() {
  const themeToogle = (e) => {
    document.getElementById("theme-css").href = `${e.target.value}`;
  };
  return (
    <div
      id="header"
      className="w-full flex flex-row justify-between items-center mb-4 headerColors"
    >
      <div className="text-2xl self-end">calc</div>
      <div id="textTheme" className="w-full flex justify-end self-end">
        <div id="theme" className="uppercase text-xs mr-4 flex tracking-wider">
          theme
        </div>
      </div>
      <div id="switchContainer">
        <div id="numbers" className="flex justify-between text-center text-xs">
          <div className="numberStyles">1</div>
          <div className="numberStyles">2</div>
          <div className="numberStyles">3</div>
        </div>
        <div id="themeContainer">
          <div
            id="theme-toggle"
            className="flex justify-center items-start rounded-xl"
          >
            <label className="custom-radio-button">
              <input
                id="first"
                name="toggle-state"
                type="radio"
                defaultChecked
                value="style1.css"
                onClick={themeToogle}
              />
              <span className="checkmark"></span>
            </label>

            <label className="custom-radio-button">
              <input
                id="second"
                name="toggle-state"
                type="radio"
                value="style2.css"
                onClick={themeToogle}
              />
              <span className="checkmark"></span>
            </label>

            <label className="custom-radio-button">
              <input
                id="third"
                name="toggle-state"
                type="radio"
                value="style3.css"
                onClick={themeToogle}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
