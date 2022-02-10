import "../css/base.css"; //base
import "../css/fonts.css"; //fonts
import "../css/common.css"; //공통CSS
import "../css/mainPage.css";
import { A } from "./util/Common";
import CommonImg from "./ImgLoader";

//폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

import { React, useCallback, useState } from "react";

const LOGIN_TYPE = {
    LOGIN: 1,
    NON_MEMBER: 2
};

function LoginPage() {
    let [loginType, setLoginType] = useState(LOGIN_TYPE.LOGIN);
    const onClick = useCallback(loginType => {
        setLoginType(loginType);
    });
    return (
        <div className="Wrap logIn contentWrap">

            <div className="logInContainer">
                <div className="loginTxt">로그인</div>
                <ul>
                    <TabButton onClick={onClick} loginType={loginType} type={LOGIN_TYPE.LOGIN} >로그인</TabButton>
                    <TabButton onClick={onClick} loginType={loginType} type={LOGIN_TYPE.NON_MEMBER} >비회원 주문 조회</TabButton>
                </ul>

                <Login loginType={loginType} />
            </div>
        </div>
    )

}

function TabButton({ type, onClick, children, loginType }) {
    return (
        <li onClick={() => { onClick(type) }} className={type === loginType ? "active" : ""} data-tab="tab-1">
            <span>{children}</span>
        </li>
    );
}

function Login({ loginType }) {
    switch (loginType) {
        case LOGIN_TYPE.LOGIN:
            return <LoginTab />
        case LOGIN_TYPE.NON_MEMBER:
            return <NonMemberOrderCheckTab />
    }
}

function LoginTab() {
    return (
        <div id="tab-1" className="tab-content show">
            <form action="">
                <input type="text" placeholder="휴대폰번호 또는 아이디를 입력해주세요." />
                <input type="text" placeholder="비밀번호를 입력해주세요." />
                <button className="cl_defaultBtn">로그인</button>

                <div className="checkBox">
                    <input type="checkbox" name="logIn" id="logIn" />
                    <label htmlFor="logIn" className="logState">아이디 저장</label>

                    <input type="checkbox" name="logIn" id="pw" />
                    <label htmlFor="pw" className="logState">비밀번호</label>
                </div>
            </form>


            <div className="snsBox">
                <A className="circle yellow"><img src={CommonImg.iconKakao} /></A>
                <A className="circle green"><img src={CommonImg.iconNaver} /></A>
                <A className="circle black"><FontAwesomeIcon icon={faApple} /></A>
            </div>

            <div className="subNotice">
                "잠깐! 아이디를 잊어버리셨나요?
                <span>핸드폰번호</span>로 로그인해보세요."
            </div>

            <div className="findUser">
                <span><A>아이디 찾기</A></span>
                <span><A>비밀번호 찾기</A></span>
                <span><A>회원가입</A></span>
            </div>
        </div>
    );
}

function NonMemberOrderCheckTab() {
    return (
        <div id="tab-2" className="tab-content noMember">
            <form action="">
                <input type="text" placeholder="주문자 이름 입력" />
                <input type="text" placeholder="주문번호 입력" />
                <input type="text" placeholder="휴대폰 번호 입력" />
                <button className="cl_defaultBtn">조회</button>

                <div className="signUpBox">
                    <p>회원가입시 토니모리의 더 많은 혜택을 받아보실 수 있습니다.</p>
                    <button className="cl_defaultBtn signUpBtn">회원가입</button>
                </div>
            </form>
        </div>
    );
}


export default LoginPage;