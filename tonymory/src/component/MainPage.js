
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
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { React, useEffect, useRef, useState } from "react";

import { KeywordData, MainVisualData, ProductData } from "../data/data";
import Product, { ProductRow } from "./Product";



function MainPage() {
    return (
        <div className="Wrap">
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
                    <A><img src={CommonImg.eventImg00} /></A>
                    <A><img src={CommonImg.eventImg01} /></A>
                </section>


                <section className="bestContainer divisionSpace">
                    <p className="cl_headLineName">이 시각, 인기 절정 베스트
                        <A>더 많은 상품보기</A>
                    </p>
                    <Top6ProductElem />
                </section>

                <section className="tiptoc divisionSpace">
                    <p className="cl_headLineName">같이 볼래요? 꿀잼 토니팁톡
                        <A>더 많은 콘텐츠보기</A>
                    </p>
                    <div className="tiptocCon">
                        <div className="tiptocInner">
                            <A><img src={CommonImg.tiptoc00} /></A>
                            <div className="infor">

                                <A>
                                    <span>지친 피부엔? 퀵 카밍 노하우</span>
                                    <span>장기간 마스크 생활로 울긋불긋 자극 받은 내 피부. 지친 피부를 구원해 줄 듀오가 떴다!</span>
                                </A>
                                <div className="hashtag">
                                    <A>#어성초시카</A>
                                    <A>#어성초토너</A>
                                    <A>#어성초패드</A>
                                    <A>#손상흡토</A>
                                    <A>#수분진정</A>
                                    <A>#각질케어</A>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="realReview divisionSpace">
                    <p className="cl_headLineName">직접 써보고 작성한 찐 리뷰
                        <A>더 많은 리뷰보기</A>
                    </p>
                    <div className="reviewSlider">
                        <div className="slideCon">
                            <A>
                                <img src={CommonImg.realReview00} />
                                <div className="mainTxt">애교빔 3종 세트(+스핀오프 팔레트 증정!!)</div>
                                <div className="elip">참새가 방앗간을 그냥 지나치지 못하듯 까마귀인 저도 글리터를 그냥 지나치지 못했어요... 마스크 때문에 눈화장에 신경을 많이 쓰고 있고 특히 애교살에 힘을 많이 주는 편이라
                                    애교빔 3종 세트라고 해서 바로 구매했습니다 ㅋㅋ 애교빔 제품들도 다 마음에 들고 삐삐체리 팔레트도
                                    예뻐서 글리터쪽에 같이 리뷰 써요! 애교빔 글링 글리터 3호 핑크빔은 말그대로 체리처럼 상큼한 핑크빔이 매력적인 리퀴드 글리터입니다.
                                </div>
                                <div className="reviewBottom">
                                    {/* 베스트 경우 class명: orange로 색상만 넣어줌*/}
                                    <span className="orange">베스트</span>
                                    <div className="reviewUserPakage">
                                        <span className="userName">사용자1</span>
                                        <span className="date">2022.02.09</span>
                                    </div>
                                </div>
                            </A>
                        </div>

                        <div className="slideCon">
                            <A>
                                <img src={CommonImg.realReview01} />
                                <div className="mainTxt">플로리아 뉴트라 에너지 100시간 크림 50ml</div>
                                <div className="elip">사용감이랑 보습유지를 동시에 잡은 흔치 않은 크림이었어요. 제형이 상당히 독특한데요. 펌핑하면 꾸덕한 느낌으로 나오는데 문지르면 묽은 크림처럼 부드럽게 퍼져요. 흡수력도 좋아서 문질문질하면 금새 피부에 스며들고요. 다만 속건조까지 잡아주는 타입은 아니니 세럼 등 속보습은 따로 충분히 해야 해요. 오일 보습막이 만들어진듯한 느낌으로 마무리되고, 그만큼 촉촉함도 오래 지속됐어요. 광택도 꽤 많이 올라오고요.
                                </div>
                                <div className="reviewBottom">
                                    {/* 베스트아닐 경우 class명: basic  */}
                                    <span className="basic">실시간</span>
                                    <div className="reviewUserPakage">
                                        <span className="userName">사용자1</span>
                                        <span className="date">2022.02.09</span>
                                    </div>
                                </div>
                            </A>
                        </div>

                        <div className="slideCon">
                            <A>
                                <img src={CommonImg.realReview02} />
                                <div className="mainTxt">프롬 해남 까만 보리 미스트 토너 리필</div>
                                <div className="elip">겨울이라 난방때문에 어쩔수없이 건조해서 구매햇어요 리필형이라 환경에 도움도 되고 작은 스프레이통에 소분해서 여러개로 담아서 여기저기 놓고 자주 사용하면 소지하기도 좋고 건조하지 않고 촉촉해서 좋아요.굿 화장위에해도 잘유지되어 굿굿 써보고싶었던 제품인데 저렴하게 구입해서 굿굿굿
                                </div>
                                <div className="reviewBottom">
                                    <span className="basic">신상</span>
                                    <div className="reviewUserPakage">
                                        <span className="userName">사용자1</span>
                                        <span className="date">2022.02.09</span>
                                    </div>
                                </div>
                            </A>
                        </div>

                    </div>
                    
                    
                    
                    
                </section>
                
                <section className="newItem divisionSpace">
                    <p className="cl_headLineName">눈이 번쩍! 신상이 도착했어요
                        <A>더 많은 상품보기</A>
                    </p>
                    <ul className="productsContainer">
                        <RecommandProductElem />
                    </ul>
                </section>
                
                <section className="lineUp">
                    <p className="cl_headLineName">한 눈에 보는 추천 라인</p>
                    <div className="lineUpContainer">
                        <A>플로리아 뉴트라</A>
                        <A>타워베리어</A>
                        <A>아토아미노</A>
                        <A>더 블랙티</A>
                        <A>에이지 플로리아</A>
                        <A>내추럴스 산양유</A>
                    </div>
                    
                    <div className="sliderContainer">
                        <A><img src={CommonImg.floria00}/></A>
                        <div className="test">
                            slider 

                        </div>
                    </div>
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
                                <A>자주묻는 질문 <FontAwesomeIcon icon={faChevronRight} /></A>
                                <A>1:1문의 <FontAwesomeIcon icon={faChevronRight} /></A>
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
                                <A className="circle"><FontAwesomeIcon icon={faFacebookF} /></A>
                                <A className="circle"><FontAwesomeIcon icon={faInstagram} /></A>
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

function Top6ProductElem() {
    const products = [];
    for (let i = 0; i < ProductData.length; ++i) {
        if (products.length === 6)
            break;

        if (ProductData[i].num > 6)
            continue;

        products.push(<ProductRow key={i} data={ProductData[i]} />);
    }

    return (
        <div className="productRowflexWrap">
            {products}
        </div>
    );
}

export default MainPage;