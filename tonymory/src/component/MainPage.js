import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/common.css";
import "../css/mainPage.css";


// import 이미지 변수명 from getImg(이미지 파일명);
import tonyLogo from "../img/tonyLogo.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
    return (
        <>
            <div className="Wrap">
                <header className="header">
                    <div>
                        <img src={tonyLogo}></img>
                    </div>
                    <div className="searchCon">
                        <input type={text}></input>
                    </div>
                    <div className="userCon">
                        <div className="userList">
                            <span>로그인</span>
                            <span>회원가입</span>
                            <span>고객센터</span>
                        </div>
                        <ul className="iconBox">
                            <li>
                                test
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </>
    );
}


export default MainPage;