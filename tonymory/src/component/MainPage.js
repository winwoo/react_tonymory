import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/common.css";
import "../css/mainPage.css";


// import 이미지 변수명 from getImg(이미지 파일명);
import tonyLogo from "../img/tonyLogo.png";
import iconSearch from "../img/icon_search.png";
import iconUser from "../img/icon_user.png";
import iconShoppingBag from "../img/icon_shoppingbag.png";
import iconProducts from "../img/icon_products.png";
import iconNav from "../img/icon_nav.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
    return (
        <>
            <div className="Wrap">
                <div className="contentWrap">
                    {/*start::header*/}
                    <header className="header ">
                        <h1>
                            <a href="#"><img src={tonyLogo}></img></a>
                        </h1>
                        <div className="searchCon">
                            <input type="text" placeholder="10층 수분 돌파 비건 모찌 토너"></input>
                            <img className="iconSearch" src={iconSearch}></img>
                        </div>
                        <div className="userCon">
                            <div className="userList">
                                <span><a href="#">로그인</a></span>
                                <span><a href="#">회원가입</a></span>
                                <span><a href="#">고객센터</a></span>
                            </div>
                            <div className="iconBox">
                                <div className="iconList">
                                    <a href="#">
                                        <span><img src={iconUser}></img></span>
                                        <span className="txt">마이페이지</span>
                                    </a>
                                </div>
                                <div className="iconList">
                                    <a href="#">
                                        <span><img src={iconShoppingBag}></img></span>
                                        <span className="txt">쇼핑백 <span className="shoppingNum">0</span> </span>
                                    </a>
                                </div>
                                <div className="iconList">
                                    <a href="#">
                                        <span><img src={iconProducts}></img></span>
                                        <span className="txt">최근본상품</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>

                </div> {/*End::contentWrap*/}

                <div className="navContainer">
                    <div className="contentWrap">
                        <div className="navInner">
                            <div className="btnMenu">
                                <a href="#">
                                    <img src={iconNav}></img>
                                    <span className="">전체 카테고리</span>
                                </a>
                            </div>
                            <nav className="navList">
                                <a href="#">베스트</a>
                                <a href="#">신상</a>
                                <a href="#">리뷰</a>
                                <a href="#">커뮤니티</a>
                                <a href="#">토니팁톡</a>
                                <a href="#">쇼킹TV</a>
                                <a href="#">기획전</a>
                                <a href="#">이벤트</a>
                            </nav>
                        </div>
                    </div>
                </div>

            </div> {/*End::Wrap*/}

        </>
    );
}


export default MainPage;