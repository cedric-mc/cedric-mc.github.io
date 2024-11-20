import lottie from "lottie-web";

lottie.loadAnimation({
    container: document.getElementById('lottie-container'), // Container to bind the animation
    renderer: 'svg', // Render as SVG
    loop: true,      // Enable looping
    autoplay: true,  // Start the animation automatically
    animationData: require('../data/animation.json'), // Animation data
});

function ScrollArrow() {
    return (
        <>
            <div id="arrow-container">
                {/*<svg className="arrow">
                    <use xlinkHref="#arrow"></use>
                </svg>*/}
                <div id="lottie-container"></div>
            </div>
        </>
    );
}

export default ScrollArrow;
