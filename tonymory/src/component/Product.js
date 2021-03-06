import "../css/base.css"; //base
import "../css/fonts.css"; //fonts
import "../css/common.css";
import "../css/mainPage.css";
import { ImgLoad } from "./ImgLoader";
import { A } from "./util/Common";

//추천상품 이미지
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Product({ data, isDimmedCon }) {
    if (!data)
        return null;

    return (
        <div className="productsList">
            <img src={ImgLoad(data.img)} />
            <div className="dimmerBg">
                {isDimmedCon && <DimmedCon />}
            </div>
            {/* 상품 레이아웃 공통 부분 */}
            <ProductInfo data={data} />
        </div>
    );
}

export function ProductRow({ data }) {
    return (
        <div className="productsList row">
            <Num num={data.num} />
            <img src={ImgLoad(data.img)} />
            {/* 상품 레이아웃 공통 부분 */}
            <ProductInfo data={data} />
            <div className="iconBox">
                <FontAwesomeIcon className="icon" icon={faHeart} size="2x" />
            </div>
        </div>
    );
}

function DimmedCon() {
    return (
        <div className="dimmedCon">
            <A>
                <span className="circle"> <FontAwesomeIcon icon={faShoppingBag} size="2x" /></span>
            </A>
            <A>
                <span className="circle"><FontAwesomeIcon icon={faHeart} size="2x" /></span>
            </A>
            <A>
                <span className="circle"><FontAwesomeIcon icon={faCreditCard} size="2x" /></span>
            </A>
        </div>
    );
}

function ProductInfo({ data }) {
    return (
        <div>
            {data.benefits && <Banefit banefit={data.benefits} />}
            <div className="tonymoly">{data.category}</div>
            <div className="productsName">{data.productName}</div>
            <Price data={data} />
            <TagList tags={data.tags} />
            {
                (data.reviewScore > 0 && data.reviewCount > 0) &&
                <div className="grade">
                    <span className="score">★ {data.reviewScore}</span>
                    <span className="review">리뷰 {data.reviewCount}</span>
                </div>
            }
        </div>
    );
}

function Banefit({ banefit }) {
    return banefit && <div className="benefits">{banefit}</div>
}

function Price({ data }) {
    if (!data.discountRate || data.discountRate <= 0) {
        // 할인 없을 경우
        return (
            <div className="productsPrice">
                <span className="price basicPrice">{data.price.toLocaleString()}</span>
            </div>
        );
    }

    // 할인 있을 경우
    const discountPrice = data.price * (1 - data.discountRate);
    return (
        <div className="productsPrice">
            <span className="percent">{data.discountRate * 100}%</span>
            <span className="price discount">{data.price.toLocaleString()}</span>
            <span className="price basicPrice">{discountPrice.toLocaleString()}</span>
        </div>
    );
}

function TagList({ tags }) {
    if (!tags || tags.length === 0)
        return null;

    const tagArr = [];
    for (let i = 0; i < tags.length; ++i) {
        tagArr.push(<span key={i} className="flag">{tags[i]}</span>)
    }

    return (
        <>
            {
                <div className="flagBox">
                    {tagArr}
                </div>
            }
        </>
    );
}

function Num({ num }) {
    if (num < 4) {
        // 1~3 num 레이아웃
        return <span className="num orange"> {num} </span>;
    } else {
        // 그 외 레이아웃
        return <span className="num black"> {num} </span>;
    }
}

export default Product;
