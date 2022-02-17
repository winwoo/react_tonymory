// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function ProductSlickSlider({viewCount, children}) {
    let sliderRef = useRef(null);

    function onClickLeft() {
        sliderRef.current.slickPrev();
    }
    function onClickRight() {
        sliderRef.current.slickNext();
    }

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: viewCount,
        slidesToScroll: viewCount,
        dotsClass: "slick-dots-custom",
        appendDots: dots => slickSlideNav(dots, onClickLeft, onClickRight)
    };

    function slickSlideNav(dots, onClickLeft, onClickRight) {
        return (
            <>
                <ul className="slick-dots-custom">
                    <div onClick={onClickLeft}>L</div>
                    {dots}
                    <div onClick={onClickRight}>R</div>
                </ul>
            </>
        );
    }

    return (
        <>
            <Slider ref={sliderRef} {...settings}>
                {children}
            </Slider>
        </>
    );
}

export default ProductSlickSlider;