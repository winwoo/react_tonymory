import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/common.css";
import "../css/mainPage.css";
import { A } from "./util/common";


// import 이미지 변수명 from getImg(이미지 파일명);
import tonyLogo from "../img/tonyLogo.png";
import iconSearch from "../img/icon_search.png";
import iconUser from "../img/icon_user.png";
import iconShoppingBag from "../img/icon_shoppingbag.png";
import iconProducts from "../img/icon_products.png";
import iconNav from "../img/icon_nav.png";
//mainVisual 이미지
import mainVisualImg00 from "../img/event0518.jpg";
//눈이가는 핫키워드 이미지
import keywordIcon00 from "../img/keyword00.png";
import keywordIcon01 from "../img/keyword01.png";
import keywordIcon02 from "../img/keyword02.png";
import keywordIcon03 from "../img/keyword03.png";
import keywordIcon04 from "../img/keyword04.png";
import keywordIcon05 from "../img/keyword05.png";
import keywordIcon06 from "../img/keyword06.png";
import keywordIcon07 from "../img/keyword07.jpg";
import keywordIcon08 from "../img/keyword08.jpg";
import keywordIcon09 from "../img/keyword09.jpg";
//추천상품 이미지
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import heart_icon from "../img/heart_icon.png";
import credit_icon from "../img/credit_icon.png";
import products00 from "../img/products00.jpg";

import { useState } from "react";

function MainPage() {

    let [shoppingNum, setShoppingNum] = useState(0);

    return (
        <>
            <div className="Wrap">
                <div className="contentWrap">
                    {/*start::header*/}
                    <header className="header ">
                        <h1>
                            <A content={<img src={tonyLogo} />} />
                        </h1>
                        <div className="searchCon">
                            <input type="text" placeholder="10층 수분 돌파 비건 모찌 토너" />
                            <img className="iconSearch" src={iconSearch} />
                        </div>
                        <div className="userCon">
                            <div className="userList">
                                <UserListElem text={"로그인"} />
                                <UserListElem text={"회원가입"} />
                                <UserListElem text={"고객센터"} />
                            </div>
                            <div className="iconBox">
                                <UserIconListElem img={iconUser} text={"마이페이지"} />
                                <UserIconListElem img={iconShoppingBag} text={"쇼핑백"} shoppingNum={shoppingNum} />
                                <UserIconListElem img={iconProducts} text={"최근본상품"} />
                            </div>
                        </div>
                    </header>

                </div> {/*End::contentWrap*/}

                {/*start::navContainer*/}
                <div className="navContainer">
                    <div className="contentWrap">
                        <div className="navInner">
                            <div className="btnMenu">
                                <A content={<>
                                    <img src={iconNav} />
                                    <span className="">전체 카테고리</span>
                                </>} />
                            </div>
                            <nav className="navList">
                                <A content={"베스트"} />
                                <A content={"신상"} />
                                <A content={"리뷰"} />
                                <A content={"커뮤니티"} />
                                <A content={"토니팁톡"} />
                                <A content={"쇼킹TV"} />
                                <A content={"기획전"} />
                                <A content={"이벤트"} />
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="mainVisualSlide">
                    <div className="mainImgContainer"><img src={mainVisualImg00}></img></div>
                    <div className="slideNavBar contentWrap">
                        <A content={"빅세일"} />
                        <A content={"토니랩1+1"} />
                        <A content={"당첨자 발표"} />
                        <A content={"리뷰이벤트"} />
                        <A content={"토니팁톡"} />
                        <A content={"1월 혜택"} />
                        <A content={"T스튜디오"} />
                        <A content={"뷰티테스터"} />
                        <A content={"이달의신상"} />
                        <A content={"비건라이너"} />

                        <div className="sliderBtnBox">
                            test
                        </div>
                    </div>
                </div>{/*End::mainVisual*/}

                <div className="contentWrap">
                    <section className="mainSection">
                        <p className="cl_headLineName">눈이 가는 핫#키워드</p>
                        <ul className="keyWordList">
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon00} /></span>
                                        <span className="keyWordSubName">#더쇼킹배송</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon01} /></span>
                                        <span className="keyWordSubName">#비건</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon02} /></span>
                                        <span className="keyWordSubName">#오하착</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon03} /></span>
                                        <span className="keyWordSubName">#모찌라인</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon04} /></span>
                                        <span className="keyWordSubName">#팩&패드</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon05} /></span>
                                        <span className="keyWordSubName">#기미야</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon06} /></span>
                                        <span className="keyWordSubName">#SUN</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon07} /></span>
                                        <span className="keyWordSubName">#보습</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon08} /></span>
                                        <span className="keyWordSubName">#콜라겐</span>
                                    </>
                                } />
                            </li>
                            <li>
                                <A content={
                                    <>
                                        <span className="keyWordImg"><img src={keywordIcon09} /></span>
                                        <span className="keyWordSubName">#슈퍼인텐스</span>
                                    </>
                                } />
                            </li>
                        </ul>
                    </section>

                    <section className="products">
                        <p className="cl_headLineName">추천상품</p>
                        <ul className="productsContainer">
                            <li className="productsList">
                                <img src={products00} />
                                <div className="benefits">1.13~1.17 쿠폰 적용시 9,900원</div>
                                <div className="tonymoly">TONYMOLY</div>
                                <div className="productsName">프롬 강화 맑은 약쑥 안정 수분크림</div>
                                <div className="productsPrice"><span className="discount">165,000</span><span className="price">38,000</span>원</div>
                                <div className="flagBox"><span className="flag">무배</span></div>
                                <div className="grade">
                                    <span className="score">★ 4.8</span>
                                    <span className="review">리뷰 59</span>
                                </div>
                                <div className="dimmerBg">
                                    <div className="dimmedCon">
                                        <A content={
                                            <>
                                                <span className="circle"> <FontAwesomeIcon icon={faShoppingBag} size="2x" /></span>
                                            </>
                                        } />
                                        <A content={
                                            <>
                                                <span className="circle"><FontAwesomeIcon icon={faHeart} size="2x" /></span>
                                            </>
                                        } />
                                        <A content={
                                            <>
                                                <span className="circle"><FontAwesomeIcon icon={faCreditCard} size="2x" /></span>
                                            </>
                                        } />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                </div>

            </div> {/*End::Wrap*/}

        </>
    );
}

function UserListElem({ text }) {

    return <span><A content={text} /></span>;
}

function UserIconListElem({ img, text, shoppingNum }) {
    return ( 
        <div className="iconList">
            <A content={<>
                <span><img src={img}></img></span>
                {
                    shoppingNum === undefined ?
                        <span className="txt">{text}</span> :
                        <span className="txt">{text}<span className="shoppingNum">{shoppingNum}</span> </span>
                }
            </>} />
        </div>
    );
}


export default MainPage;