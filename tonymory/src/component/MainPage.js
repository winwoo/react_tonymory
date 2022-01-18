import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/common.css";
import "../css/mainPage.css";
import { A } from "./util/Common";
import CommonImg, { ImgLoad } from "./ImgLoader";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//추천상품 이미지
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";

import { KeywordData, MainVisualData, RecommandProductData } from "../data/data";


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
    for (let i = 0; i < RecommandProductData.length; ++i) {
        const data = RecommandProductData[i];
        const discountPrice = data.price * (1 - data.discountRate);

        recommandProductArr.push(
            <li className="productsList" key={i}>
                <img src={ImgLoad(data.img)} />
                <div className="dimmerBg">
                    <div className="dimmedCon">
                        <A>
                            <span className="circle"> <FontAwesomeIcon icon={faShoppingBag} size="2x" /></span>
                        </A>
                        <A>
                            <span className="circle"><FontAwesomeIcon icon={faHeart} size="2x" /></span>
                        </A>
                        <A>
                            <span className="circle"><FontAwesomeIcon icon={faCreditCard} size="2x" /></span>
                        </A>
                    </div>
                </div>
                <div className="benefits">{data.couponDate}쿠폰 적용시 {data.couponPrice.toLocaleString()}원</div>
                <div className="tonymoly">{data.category}</div>
                <div className="productsName">{data.productName}</div>
                <div className="productsPrice">
                    <span className="percent">{data.discountRate * 100}%</span>
                    <span className="price discount">{data.price.toLocaleString()}</span>
                    <span className="price basicPrice">{discountPrice.toLocaleString()}</span>
                </div>
                { 
                    data.isOnlyOnline || data.isFreeDelivery ?
                        <div className="flagBox">
                            {data.isOnlyOnline && <span className="flag">ONLY 온라인</span>}
                            {data.isFreeDelivery && <span className="flag">무배</span>}
                        </div> :
                        null
                }
                <div className="grade">
                    <span className="score">★ {data.reviewScore}</span>
                    <span className="review">리뷰 {data.reviewCount}</span>
                </div>
            </li>
        );
    }
    return recommandProductArr;
}

export default MainPage;