import { format } from 'react-string-format';
const ImgLoader = {
    // import 이미지 변수명 from getImg(이미지 파일명);
    tonyLogo: ImgLoad("tonyLogo", "png"),
    iconSearch: ImgLoad("icon_search", "png"),
    iconUser: ImgLoad("icon_user", "png"),
    iconShoppingBag: ImgLoad("icon_shoppingbag", "png"),
    iconProducts: ImgLoad("icon_products", "png"),
    iconNav: ImgLoad("icon_nav", "png"),
    //mainVisual 이미지
    mainVisualImg00: ImgLoad("event0518", "jpg"),
    //눈이가는 핫키워드 이미지
    keywordIcon: [...ImgArrayLoad("keyword0{0}.png", 0, 7), ...ImgArrayLoad("keyword0{0}.jpg", 7, 10)],
    // keywordIcon00: require("../img/keyword00.png"),
    // keywordIcon01: require("../img/keyword01.png"),
    // keywordIcon02: require("../img/keyword02.png"),
    // keywordIcon03: require("../img/keyword03.png"),
    // keywordIcon04: require("../img/keyword04.png"),
    // keywordIcon05: require("../img/keyword05.png"),
    // keywordIcon06: require("../img/keyword06.png"),
    // keywordIcon07: require("../img/keyword07.jpg"),
    // keywordIcon08: require("../img/keyword08.jpg"),
    // keywordIcon09: require("../img/keyword09.jpg"),
    //추천상품 이미지
    heart_icon: ImgLoad("heart_icon", "png"),
    credit_icon: ImgLoad("credit_icon", "png"),
    products00: ImgLoad("products00", "jpg"),
};

function ImgLoad(imgName, extention) {
    return require("../img/" + imgName + "." + extention);
}
function ImgLoadA(imgName) {
    return require.context('../img/', false, '/\.(jpg|png|svg)$/');
}

function ImgArrayLoad(imgNameFormat, startIndex, length) {
    const imgArr = [];
    for (let i = startIndex; i < length; ++i) {
        const imgName = format(imgNameFormat, i);
        imgArr.push(ImgLoad(imgName));
    }
    return imgArr;
}



export default ImgLoader;