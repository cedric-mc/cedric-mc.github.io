import React, { useState, useEffect } from 'react';

function ScrollArrow() {
    var [hide, setHide] = useState(false);
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = 0;
    var ticking = false;

    useEffect(() => {
        window.addEventListener('scroll', function() {
            scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setHide(true);
            } else {
                setHide(false);
            }
        });
    }, []);

    return (
        <div id="arrow-container" onScroll={hide ? "hidden" : "visible"}>
            <svg className="arrow">
                <use xlinkHref="#arrow"></use>
            </svg>
        </div>
    );
}

export default ScrollArrow;
