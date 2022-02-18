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
    //상담톡이미지
    chat : ImgLoad("btn_pc_chat.png"),
    //top이미지
    top : ImgLoad("btn_pc_top.png"),
    tonyLogo: ImgLoad("tonyLogo.png"),
    iconSearch: ImgLoad("icon_search.png"),
    iconUser: ImgLoad("icon_user.png"),
    iconShoppingBag: ImgLoad("icon_shoppingbag.png"),
    iconProducts: ImgLoad("icon_products.png"),
    iconNav: ImgLoad("icon_nav.png"),
    iconNaver : ImgLoad("icon_naver.png"),
    iconKakao : ImgLoad("icon_kakao.png"),
    //mainVisual 이미지
    mainVisualImg00: ImgLoad("event0518.jpg"),
    //추천상품 이미지
    heart_icon: ImgLoad("heart_icon.png"),
    credit_icon: ImgLoad("credit_icon.png"),
    products00: ImgLoad("products00.jpg"),
    products01: ImgLoad("products01.jpg"),
    products02: ImgLoad("products02.jpg"),
    products03: ImgLoad("products03.jpg"),
    products03: ImgLoad("products04.jpg"),
    products03: ImgLoad("products05.jpg"),
    products03: ImgLoad("products06.jpg"),
    products03: ImgLoad("products07.jpg"),
    products03: ImgLoad("products08.jpg"),
    products03: ImgLoad("products09.jpg"),
    products03: ImgLoad("products10.jpg"),
    products03: ImgLoad("products11.jpg"),
    //이벤트 이미지
    eventImg00: ImgLoad("evt00.jpg"),
    eventImg01: ImgLoad("evt01.jpg"),
    //찐리뷰 이미지
    realReview00 : ImgLoad("realReview00.jpg"), //애교빔
    reviewInnerImg00_1 : ImgLoad("realReviewDetail00_1.jpg"), //애교빔 클릭시 상세이미지 애교빔 3종세트
    reviewInnerImg00_2 : ImgLoad("realReviewDetail00_2.jpg"),
    reviewInnerImg00_3 : ImgLoad("realReviewDetail00_3.jpg"),
    reviewInnerImg00_4 : ImgLoad("realReviewDetail00_4.jpg"),
    realReview01 : ImgLoad("realReview01.jpg"), //플로리아 뉴트라 에너지
    realReview02 : ImgLoad("realReview02.jpg"), //까만 보리
    realReview03 : ImgLoad("realReview03.jpg"), //더쇼킹스핀오프삐삐체리
    reviewInnerImg03_1 : ImgLoad("realReviewDetail03_1.jpg"), //더쇼킹스핀오프삐삐체리_세부이미지
    reviewInnerImg03_2 : ImgLoad("realReviewDetail03_2.jpg"), //더쇼킹스핀오프삐삐체리_세부이미지
    reviewInnerImg03_3 : ImgLoad("realReviewDetail03_3.jpg"), //더쇼킹스핀오프삐삐체리_세부이미지
    //한눈에 보는 추천라인
    floria00 : ImgLoad("floria00.jpg"), //대문이미지
    floria01 : ImgLoad("floria01.jpg"), //에너지2종세트
    floria02 : ImgLoad("floria02.jpg"), //100시간 크림
    floria03 : ImgLoad("floria03.jpg"), //에멀전
};


export default CommonImg;