import "../css/common.css";
import "../css/mainPage.css";


// import 이미지 변수명 from getImg(이미지 파일명);

function MainPage() {
    return (
        <>
            {/* 여기에 Dom 작성 */}
        </>
    );
}


function getImg(imgName) {
    const IMG_PATH = "../img/";
    return IMG_PATH + imgName;
}

export default MainPage;