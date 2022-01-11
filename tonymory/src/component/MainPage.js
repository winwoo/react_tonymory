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
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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