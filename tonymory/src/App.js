import "./css/base.css"; //base
import "./css/fonts.css"; //fonts
import "./css/common.css"; //공통CSS
import "./css/mainPage.css";

import MainPage from './component/MainPage';
import LoginPage from './component/LoginPage';
import ReviewModal from './component/ReviewModal';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { A } from "./component/util/Common";
import CommonImg from "./component/ImgLoader";
import { React, useCallback, useState } from "react";

function App() {
    let [shoppingNum, setShoppingNum] = useState(0);
    let [isNavCategoryOpen, setNavCateoryOpen] = useState(false);
    let navigate = useNavigate();
    const onNavCategory = useCallback(isOn => {
        setNavCateoryOpen(isOn);
    });

    const movePage = useCallback(path => {
        navigate(path);
    });

    return (
        <div>
            <div className="Wrap">
                <div className="contentWrap">
                    {/*start::header*/}
                    <header className="header ">
                        <h1>
                            <A onClick={() => { movePage("/") }}><img src={CommonImg.tonyLogo} /></A>
                        </h1>
                        <div className="searchCon">
                            <input type="text" placeholder="10층 수분 돌파 비건 모찌 토너" />
                            <img className="iconSearch" src={CommonImg.iconSearch} />
                        </div>
                        <div className="userCon">
                            <div className="userList">
                                <UserListElem text={"로그인"} onClick={() => { movePage("/login") }} />
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
                <div className="navConWrapper">
                    <div className="navContainer contentWrap">
                        <div className="navInner">
                            <div className="btnMenu" onMouseEnter={() => { onNavCategory(true) }} onMouseLeave={() => { onNavCategory(false) }}>
                                <A>
                                    <img src={CommonImg.iconNav} />
                                    <span className="">전체 카테고리</span>
                                </A>
                                {/* nav 마우스오버 했을 때*/}
                                {isNavCategoryOpen && <NavCategoryCon />}
                            </div>
                            <nav className="navList">
                                <A>베스트<span className="orange"></span></A>
                                <A>신상</A>
                                <A>커뮤니티</A>
                                <A>토니팁톡</A>
                                <A>쇼킹TV</A>
                                <A>기획전</A>
                                <A>이벤트</A>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/ReviewModal" element={<ReviewModal />} />
            </Routes>
        </div>
    );
}

function UserListElem({ text, onClick }) {
    return <span><A onClick={onClick} href="">{text}</A></span>;
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

function NavCategoryCon() {
    return (
        <div className="navCategoryCon">
            <div className="categoryList">
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>기초</A>
                    </li>
                    <ul className="depth2">
                        <li><A>스킨케어</A></li>
                        <li><A>클렌징</A></li>
                        <li><A>스페셜 케어</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>메이크업</A>
                    </li>
                    <ul className="depth2">
                        <li><A>페이스</A></li>
                        <li><A>립</A></li>
                        <li><A>아이</A></li>
                        <li><A>네일</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>바디/헤어</A>
                    </li>
                    <ul className="depth2">
                        <li><A>바디</A></li>
                        <li><A>헤어</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>향수/디퓨저/캔들</A>
                    </li>
                    <ul className="depth2">
                        <li><A>향수</A></li>
                        <li><A>패브릭퍼퓸</A></li>
                        <li><A>캔들/디퓨저</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>미용소품</A>
                    </li>
                    <ul className="depth2">
                        <li><A>스킨케어소품</A></li>
                        <li><A>메이크업소품</A></li>
                        <li><A>헤어소품</A></li>
                        <li><A>바디소품</A></li>
                        <li><A>네일소품</A></li>
                        <li><A>생활소품</A></li>
                        <li><A>기타소품</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>디지털/가전</A>
                    </li>
                    <ul className="depth2">
                        <li><A>이미용가전</A></li>
                        <li><A>생활가전</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>라이프</A>
                    </li>
                    <ul className="depth2">
                        <li><A>푸드</A></li>
                        <li><A>리빙</A></li>
                        <li><A>반려동물</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>옴므</A>
                    </li>
                    <ul className="depth2">
                        <li><A>스킨케어</A></li>
                        <li><A>메이크업</A></li>
                        <li><A>클렌징케어</A></li>
                        <li><A>기타</A></li>
                    </ul>
                </ul>
                <ul className="categoryInner">
                    <li className="navMainName">
                        <A>온라인전용</A>
                    </li>
                    <ul className="depth2">
                        <li><A>기초</A></li>
                        <li><A>메이크업</A></li>
                        <li><A>바디/헤어</A></li>
                        <li><A>옴므</A></li>
                        <li><A>미용소품</A></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default App;
