
import "../css/base.css"; //base
import "../css/fonts.css"; //fonts
import "../css/common.css"; //공통CSS
import "../css/mainPage.css";
import "../css/slick.css";
import { A } from "./util/Common";
import CommonImg, { ImgLoad } from "./ImgLoader";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

                <section className="eventArea">
                    <A><img src={CommonImg.eventImg00}/></A>
                    <A><img src={CommonImg.eventImg01}/></A>
                </section>


                <section className="bestContainer">
                    <p className="cl_headLineName">이 시각, 인기 절정 베스트
                        <A>더 많은 상품보기</A>
                    </p>

                </section>

                <section className="bestContainer">
                    <p className="cl_headLineName">같이 볼래요? 꿀잼 토니팁톡
                        <A>더 많은 상품보기</A>
                    </p>

                </section>
                <section className="bestContainer">
                    <p className="cl_headLineName">직접 써보고 작성한 찐 리뷰
                        <A>더 많은 상품보기</A>
                    </p>

                </section>
                <section className="bestContainer">
                    <p className="cl_headLineName">눈이 번쩍! 신상이 도착했어요
                        <A>더 많은 상품보기</A>
                    </p>

                </section>
                <section className="bestContainer">
                    <p className="cl_headLineName">한 눈에 보는 추천 라인</p>

                </section>
                {/*End::contentWrap*/}
            </div>

            {/*start::footer*/}
            <footer>
                <div className="contentWrap">
                    <div className="companyInforBox">
                        <A>회사소개</A>
                        <A>매장정보</A>
                        <A>가맹점&특판문의</A>
                        <A>이용약관</A>
                        <A>개인정보처리방침</A>
                        <A>이메일 무단 수집거부</A>
                    </div>

                    <div className="footerServiceContainer">
                        <div className="serviceList lft">
                            <div>고객센터 이용안내</div>
                            <div className="num">080-356-2222</div>
                            <div className="time">
                                <span>평일 10:00~18:00 (주말 및 공휴일 휴무)</span>
                                <span>점심 12:00~13:00</span>
                                <span>주말 및 공휴일은 1:1문의하기를 이용해 주세요. 업무가 시작되면 바로 처리해 드리겠습니다.</span>
                            </div>
                            <div className="qBox">
                                <A>자주묻는 질문 <FontAwesomeIcon icon={faHeart}  /></A>
                                <A>1:1문의 <FontAwesomeIcon icon={faHeart}  /></A>
                            </div>
                        </div>
                        <div className="serviceList rgt">
                            <p className="cl_headLineName">공지사항
                                <A>바로가기</A>
                            </p>
                            <div className="noticeBox">
                                <A>포인트 소멸 안내포인트 소멸 안내포인트 소멸 안내 포인트 소멸 안내</A>
                                <A>구주주 청약결과 및 일반공모 안내 구주주 청약결과 및 일반공모 안내구주주 청약결과 및 일반공모 안내</A>
                                <A>신주발행가액 확정 공고</A>
                                <A>사이트 점검 및 업데이트 안내</A>
                            </div>
                        </div>

                    </div>
                    <div className="addContainer">
                        <address>
                            <div className="addBox">
                                <div className="comName">(주)토니모리</div>
                                <div className="comPakages wrap">
                                    <span>서울특별시 서초구 남부순환로 2557</span>
                                    <span>사업자번호 : 114-86-53270</span>
                                    <A>사업자 정보확인</A>
                                    <span>통신판매업신고번호: 제2015-서울서초-0615호</span>
                                    <span>대표이사 : 배해동</span>
                                    <span>개인정보보호책임자 : 김옥엽</span>
                                </div>
                                <div className="comPakages">
                                    <span>(주)이니시스 구매안전서비스</span>
                                    <span>고객님의 안전거래를 위해 현금 거래에 대해 이니페이 에스크로서비스를 이용하실 수 있습니다.</span>
                                    <A>서비스 가입사실확인</A>
                                </div>
                                <p>ⓒ TONYMOLY. ALL RIGHTS RESERVED</p>
                            </div>
                            <div className="snsBox">
                                <A className="circle">페북</A>
                                <A className="circle">인별</A>
                            </div>
                        </address>
                    </div>
                </div>
                
            </footer>
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