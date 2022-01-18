import { format } from 'react-string-format';

export const ImgLoad = (imgName) => {
    return require("../img/" + imgName);
}

export const ImgArrayLoad = (imgNameFormat, extention, startIndex, length) => {
    const imgArr = [];
    for (let i = startIndex; i < length; ++i) {
        const imgName = format(imgNameFormat, i);
        imgArr.push(ImgLoad(imgName, extention));
    }
    return imgArr;
}

const CommonImg = {
    // import 이미지 변수명 from getImg(이미지 파일명);
    tonyLogo: ImgLoad("tonyLogo.png"),
    iconSearch: ImgLoad("icon_search.png"),
    iconUser: ImgLoad("icon_user.png"),
    iconShoppingBag: ImgLoad("icon_shoppingbag.png"),
    iconProducts: ImgLoad("icon_products.png"),
    iconNav: ImgLoad("icon_nav.png"),
    //mainVisual 이미지
    mainVisualImg00: ImgLoad("event0518.jpg"),
    //추천상품 이미지
    heart_icon: ImgLoad("heart_icon.png"),
    credit_icon: ImgLoad("credit_icon.png"),
    products00: ImgLoad("products00.jpg"),
};


export default CommonImg;