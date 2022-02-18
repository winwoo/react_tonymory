// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

//폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft ,faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";


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
                    <div onClick={onClickLeft}><FontAwesomeIcon className="arrowIcon" icon={faChevronLeft} /></div>
                    {dots}
                    <div onClick={onClickRight}><FontAwesomeIcon className="arrowIcon" icon={faChevronRight} /></div>
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