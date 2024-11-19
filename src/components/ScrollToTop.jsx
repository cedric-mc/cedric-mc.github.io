import React, {useState, useEffect} from 'react';

const ScrollToTop = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`btn-up ${isTop ? 'btn-hidden' : 'btn-visible'}`} onClick={handleScrollToTop}>
            <img src="/img/arrow-up-solid.svg" className="icon-up" alt="Up Arrow"/>
        </div>
    );
};

export default ScrollToTop;
