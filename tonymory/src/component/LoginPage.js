import "../css/base.css"; //base
import "../css/fonts.css"; //fonts
import "../css/common.css"; //공통CSS
import "../css/mainPage.css";
import "../css/slick.css";
import { A } from "./util/Common";
import CommonImg, { ImgLoad } from "./ImgLoader";

// slider
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faApple } from "@fortawesome/free-brands-svg-icons";

import { React, useEffect, useRef, useState } from "react";
import { KeywordData, MainVisualData, ProductData } from "../data/data";
import Product from "./Product";

function LoginPage() {

    let [shoppingNum, setShoppingNum] = useState(0);

    return (
        <div className="Wrap logIn contentWrap">

                <div className="logInContainer">

                    <div className="loginTxt">로그인</div>
                    <ul>
                        <li className="active" data-tab="tab-1"><span>로그인</span></li>
                        <li data-tab="tab-2"><span>비회원 주문 조회</span></li>
                    </ul>

                    <div id="tab-1" className="tab-content show">
                        <form action="">
                            <input type="text" placeholder="휴대폰번호 또는 아이디를 입력해주세요."/>
                            <input type="text" placeholder="비밀번호를 입력해주세요."/>
                            <button className="cl_defaultBtn">로그인</button>

                            <div className="checkBox">
                                <input type="checkbox" name="logIn" id="logIn" />
                                <label for="logIn" className="logState">아이디 저장</label>

                                <input type="checkbox" name="logIn" id="pw"/>
                                <label for="pw" className="logState">비밀번호</label>
                            </div>
                        </form>


                        <div className="snsBox">
                            <A className="circle yellow"><img src={CommonImg.iconKakao} /></A>
                            <A className="circle green"><img src={CommonImg.iconNaver} /></A>
                            <A className="circle black"><FontAwesomeIcon icon={faApple}  /></A>
                        </div>

                        <div class="subNotice">
                            "잠깐! 아이디를 잊어버리셨나요?
                            <span>핸드폰번호</span>로 로그인해보세요."
                        </div>

                        <div className="findUser">
                            <span><A>아이디 찾기</A></span>
                            <span><A>비밀번호 찾기</A></span>
                            <span><A>회원가입</A></span>
                        </div>
                    </div>

                    {/*비회원 주문 조회 클릭시*/}
                    <div id="tab-2" className="tab-content noMember">
                        <form action="">
                            <input type="text" placeholder="주문자 이름 입력"/>
                            <input type="text" placeholder="주문번호 입력"/>
                            <input type="text" placeholder="휴대폰 번호 입력"/>
                            <button className="cl_defaultBtn">조회</button>

                            <div className="signUpBox">
                                <p>회원가입시 토니모리의 더 많은 혜택을 받아보실 수 있습니다.</p>
                                <button className="cl_defaultBtn signUpBtn">회원가입</button>
                            </div>
                        </form>
                    </div>

                </div>


        </div>
    )

}



export default LoginPage;