import React from "react";

const ThemeOption = ({ theme, svg, name }) => {
    return (
        <div id={`theme-${theme}`}>
            <svg className="spinner">
                <use xlinkHref={svg}></use>
            </svg>
            {' ' + name}
        </div>
    );
};

export default ThemeOption;
