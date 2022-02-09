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
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
                        <li data-tab="tab-1">로그인</li>
                        <li data-tab="tab-2">비회원 주문 조회</li>
                    </ul>

                    <div id="tab-1" className="tab-content show">
                        <form action="">
                            <input type="text" placeholder="휴대폰번호 또는 아이디를 입력해주세요."/>
                            <input type="text" placeholder="비밀번호를 입력해주세요."/>
                            <button>로그인</button>

                            <div className="checkBox">
                                <input type="checkbox" name="logIn" id="logIn" />
                                <label for="logIn" className="logState">아이디 저장</label>

                                <input type="checkbox" name="logIn" id="pw"/>
                                <label htmlFor="pw" className="logState">비밀번호</label>
                            </div>
                        </form>


                        <div className="snsBox">
                            <A className="circle"><FontAwesomeIcon icon={faFacebookF}  /></A>
                            <A className="circle"><FontAwesomeIcon icon={faInstagram}  /></A>
                            <A className="circle"><FontAwesomeIcon icon={faInstagram}  /></A>
                        </div>

                        <div class="subNotice">
                            "잠깐! 아이디를 잊어버리셨나요?
                            <span>핸드폰번호</span>로 로그인해보세요."
                        </div>

                        <div className="logInBox">
                            <div className="findUser">
                                <span><A>아이디 찾기</A></span>
                                <span><A>비밀번호 찾기</A></span>
                                <span><A>회원가입</A></span>
                            </div>
                        </div>
                    </div>
                    <div id="tab-2" className="tab-content">
                        <p>Information Information Information</p>
                    </div>

                </div>


        </div>
    )

}



export default LoginPage;