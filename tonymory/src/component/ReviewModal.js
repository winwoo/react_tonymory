
import "../css/base.css"; //base
import "../css/fonts.css"; //fonts
import "../css/common.css"; //공통CSS
import "../css/mainPage.css";
import { A } from "./util/Common";
import CommonImg, { ImgLoad } from "./ImgLoader";


//폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { React, useEffect, useRef, useState } from "react";

import { KeywordData, MainVisualData, ProductData } from "../data/data";

function ReviewModal() {
    return (
        <div className="Wrap modal">
            <div className="modalBg">
                <div className="modalContainer">
                    <div className="reviewTop">
                        포토리뷰 상세 <FontAwesomeIcon className="closeBtn" icon={faInstagram} />
                    </div>
                    <div className="reviewDetailCon">
                        <div className="imgslideBox">
                            {/*유저가 올린 총이미지가 슬라이드되면서 카운팅 바뀜*/}
                            <img src={CommonImg.realReview00} />
                            <div className="counting">
                                <span className="first">1</span>
                                <span className="last">5</span>
                            </div>
                        </div>
                        <div className="reviewWrapper">
                            <div className="reviewUserPakage">
                                <div className="title">
                                    <span className="userName">하승우</span>
                                    <span className="score">
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        5.0
                                    </span>
                                    <span className="date">2022.02.09</span>
                                </div>
                                <div className="skinTypeBox">
                                    <span>17호</span>
                                    <span>#보통</span>
                                    <span>#복합성</span>
                                    <span>#여름 쿨톤</span>
                                </div>
                            </div>
                            <div className="productsName">
                                <span className="orange">베스트</span>
                                <span>옵션: 애교빔 글링 글리터 03핑크빔</span>
                            </div>
                            <div className="userReview">
                                참새가 방앗간을 그냥 지나치지 못하듯 까마귀인 저도 글리터를 그냥 지나치지 못했어요... 마스크 때문에 눈화장에 신경을 많이 쓰고 있고 특히 애교살에 힘을 많이 주는 편이라 애교빔 3종 세트라고 해서 바로 구매했습니다 ㅋㅋ 애교빔 제품들도 다 마음에 들고 삐삐체리 팔레트도 예뻐서 글리터쪽에 같이 리뷰 써요! 애교빔 글링 글리터 3호 핑크빔은 말그대로 체리처럼 상큼한 핑크빔이 매력적인 리퀴드 글리터입니다. 액은 약간 묽은 편이라 마르고 픽싱될 때까지 시간은 조금 걸리지만 고정된 후에는 펄날림 없이 착 밀착됩니다. 뭉침도 없어요! 중간중간 큰 6각 글리터와 함께 영롱한 작은 골드, 그린, 블루, 핑크, 퍼플펄들이 반짝이는 글리터라서 너무 예뻤어요. 베이스색은 체리 과즙 같은 투명하고 맑은 핑크빛입니다. 애교살에 톡톡톡 발라주면 눈 밑에 약간 핑크빛 색감을 주면서 오묘한 느낌을 낼 수 있습니다. 삐삐체리 팔레트는 상큼청량하면서도 크게 튀지는 않는 체리 팔레트에요. 베이스 컬러부터 포인트나 음영 컬러, 아이라인을 풀어줄 수 있는 브라운 컬러, 눈두덩이나 애교살에 포인트를 줄 수 있는 글리터까지 있어서 활용도가 높아요. 보통 6구 팔레트라고 하면 2% 부족한 것 같은 느낌이 들 때도 있는데 이 팔레트는 그렇지 않아서 좋았어요. 피치 못할 사정으로 베이스를 깔고 정신 안 체리냐로 포인트를 준 후 깊고 진한 커피로 아이라인을 풀어주고 눈두덩이에는 베리베리 땡큐로 포인트를 준 후 마지막으로 애교살에 아 머랭을 얹어주면 눈화장 완성입니다. 애교살에 아 머랭 대신에 애교빔 글링 글리터 3호 핑크빔을 써주면 조금 더 체리체리스러운 과즙 메이크업을 할 수 있어요. 저는 베리베리땡큐와 정신안체리냐 이 두 컬러가 가장 마음에 들었어요. 또 가장 진한 브라운인 깊고진한커피도 마음에 들었던게 너무 노랗지 않으면서 적당한 붉은기를 넣어서 약간 체리목 느낌이 나는 브라운 색상이라 체리 컨셉의 팔레트에 잘 어울리는 갈색이라 좋았습니다. 진한 컬러인데도 뭉치거나 뚝뚝 끊기면서 발색되지도 않는 점도 만족스러웠고요. 팔레트의 온도감 자체는 미지근한 느낌이에요. 시원한 느낌의 색상도 있고 따뜻한 느낌의 컬러도 있습니다. 하지만 체리라는 컨셉을 잘 지키면서 조합도 알차게 잘 구성했고 컬러들도 다 웨어러블해서 부담스럽지 않아요. 웜쿨 많이 안 타시면서 체리빛이나 붉은기 잘 받으시는 분들이 쓰시면 만족스러우실 것 같아요.
                            </div>
                            <div className="directProduct">
                                dfadsfdasfdasf
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}


export default ReviewModal;