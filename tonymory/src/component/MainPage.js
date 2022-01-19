
import "../css/common.css";
import "../css/mainPage.css";
import "../css/slick.css";
import { A } from "./util/Common";
import CommonImg, { ImgLoad } from "./ImgLoader";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from "react";

import { KeywordData, MainVisualData, ProductData } from "../data/data";
import Product from "./Product";


function MainPage() {

    let [shoppingNum, setShoppingNum] = useState(0);

    return (
        <div className="Wrap">
            <div className="contentWrap">
                {/*start::header*/}
                <header className="header ">
                    <h1>
                        <A><img src={CommonImg.tonyLogo} /></A>
                    </h1>
                    <div className="searchCon">
                        <input type="text" placeholder="10층 수분 돌파 비건 모찌 토너" />
                        <img className="iconSearch" src={CommonImg.iconSearch} />
                    </div>
                    <div className="userCon">
                        <div className="userList">
                            <UserListElem text={"로그인"} />
                            <UserListElem text={"회원가입"} />
                            <UserListElem text={"고객센터"} />
                        </div>
                        <div className="iconBox">
                            <UserIconListElem img={CommonImg.iconUser} text={"마이페이지"} />
                            <UserIconListElem img={CommonImg.iconShoppingBag} text={"쇼핑백"} shoppingNum={shoppingNum} />
                            <UserIconListElem img={CommonImg.iconProducts} text={"최근본상품"} />
                        </div>
                    </div>
                </header>

            </div> {/*End::contentWrap*/}

            {/*start::navContainer*/}
            <div className="navContainer">
                <div className="contentWrap">
                    <div className="navInner">
                        <div className="btnMenu">
                            <A>
                                <img src={CommonImg.iconNav} />
                                <span className="">전체 카테고리</span>
                            </A>
                        </div>
                        <nav className="navList">
                            <A>베스트</A>
                            <A>신상</A>
                            <A>커뮤니티</A>
                            <A>토니팁톡</A>
                            <A>소킹TV</A>
                            <A>기획전</A>
                            <A>이벤트</A>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="mainVisualSlide">
                <MainVisualSlide />
            </div>{/*End::mainVisual*/}

            <div className="contentWrap">
                <section className="mainSection">
                    <p className="cl_headLineName">눈이 가는 핫#키워드</p>
                    <ul className="keyWordList">
                        <KeyWordElem />
                    </ul>
                </section>

                <section className="products">
                    <p className="cl_headLineName">추천상품</p>
                    {/* <RecommandProductElem /> */}
                    <ul className="productsContainer">
                        <RecommandProductElem />
                    </ul>
                </section>

            </div>

            {/*End::Wrap*/}
        </div>
    );
}

function MainVisualSlide() {
    let [isAutoSlide, setisAutoSlide] = useState(true);
    let sliderRef = useRef(null);

    useEffect(() => {
        isAutoSlide ? sliderRef.current.slickPlay() : sliderRef.current.slickPause();
    }, [isAutoSlide]);

    function MainVisual({ data }) {
        return (
            <div className="mainImgContainer">
                <img src={ImgLoad(data.img)} />
            </div>
        );
    }

    function MainNav({ index, data }) {
        const navIndex = index;
        return (
            <A onMouseOver={() => {
                sliderRef.current.slickGoTo(navIndex);
            }}>
                {data.navText}
            </A>
        );
    }

    const mainVisualArr = [];
    const navArr = [];
    for (let i = 0; i < MainVisualData.length; ++i) {
        const data = MainVisualData[i];
        mainVisualArr.push(<MainVisual key={i} data={data} />);
        navArr.push(<MainNav key={i} index={i} data={data} />);
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    };
    return (
        <>
            <Slider ref={sliderRef} {...settings}>
                {mainVisualArr}
            </Slider>
            <div className="slideNavBar contentWrap">
                {navArr}
                <div className="sliderBtnBox" onClick={() => {
                    setisAutoSlide(!isAutoSlide);
                }}>
                    {isAutoSlide ? "Auto" : "Stop"}
                </div>
            </div>
        </>
    );
}

function UserListElem({ text }) {

    return <span><A>{text}</A></span>;
}

function UserIconListElem({ img, text, shoppingNum }) {
    return (
        <div className="iconList">
            <A>
                <span><img src={img}></img></span>
                {
                    shoppingNum === undefined ?
                        <span className="txt">{text}</span> :
                        <span className="txt">{text}<span className="shoppingNum">{shoppingNum}</span> </span>
                }
            </A>
        </div>
    );
}

function KeyWordElem() {
    const KeywordArr = [];
    let key = 0;
    for (const data of KeywordData) {
        KeywordArr.push(
            <li key={key}>
                <A>
                    <span className="keyWordImg"><img src={ImgLoad(data.img)} /></span>
                    <span className="keyWordSubName">{data.text}</span>
                </A>
            </li>
        );
        key++;
    }
    return KeywordArr;
}

function RecommandProductElem() {
    const recommandProductArr = [];
    const recommandViewCount = 4;
    const emptyCount = ProductData.length % 4;

    // 실제 상품 셋팅
    for (let i = 0; i < ProductData.length; ++i) {
        const data = ProductData[i];

        if (!data.isRecommand)
            continue;

        recommandProductArr.push(<Product key={i} data={data} />);
    }

    // 4개씩 보여지기 위해 빈 상품으로 채워줌
    for (let i = 0; i < emptyCount; ++i) {
        recommandProductArr.push(<Product key={i} data={null} />);
    }

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: recommandViewCount,
        slidesToScroll: recommandViewCount,
        dotsClass: "slick-dots-custom",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    return (
        <>
            <Slider {...settings}>
                {recommandProductArr}
            </Slider>
            {/* {recommandProductArr} */}
        </>
    );
}

export default MainPage;