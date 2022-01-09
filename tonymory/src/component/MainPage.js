import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/common.css";
import "../css/mainPage.css";


// import 이미지 변수명 from getImg(이미지 파일명);
import tonyLogo from "../img/tonyLogo.png";
import iconSearch from "../img/icon_search.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
    return (
        <>
            <div className="Wrap">
                <header className="header">
                    <h1>
                        <img src={tonyLogo}></img>
                    </h1>
                    <div className="searchCon">
                        <input type="text" placeholder="10층 수분 돌파 비건 모찌 토너"></input>
                        <img className="iconSearch" src={iconSearch}></img>
                    </div>
                    <div className="userCon">
                        <div className="userList">
                            <span>로그인</span>
                            <span>회원가입</span>
                            <span>고객센터</span>

                        </div>
                        <div className="iconBox">
                            <div>
                                <span><img src=""></img></span>
                                <span>마이페이지</span>
                            </div>
                            <div>
                                <span><img src=""></img></span>
                                <span>마이페이지</span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    );
}


export default MainPage;