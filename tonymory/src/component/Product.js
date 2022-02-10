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

function Product({ data }) {
    if (!data)
        return null;

    return (
        <div className="productsList">
            <img src={ImgLoad(data.img)} />
            <div className="dimmerBg">
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
            </div>
            {/* 상품 레이아웃 공통 부분 */}
            <ProductInfo data={data} />
        </div>
    );
}

export function ProductRow({ data }) {
    return (
        // 가로용 상품 컴포넌트
        // 여기에 레이아웃 작업해주세요.
        <div className="productsList row">
            {/*{"가로용 상품 컴포넌트"}*/}
            <span className="num orange"> {data.num} </span>
            <img src={ImgLoad(data.img)} />
            {/* ProductInfo는 기존 Product컴포넌트와 공통 레이아웃 입니다. */}
            <div>
                <ProductInfo data={data} />
            </div>
            <div className="iconBox">
                <FontAwesomeIcon className="icon" icon={faHeart} size="2x" />
            </div>
        </div>
    )
}

function ProductInfo({ data }) {
    return (
        <div>
            <Banefit banefit={data.benefits} />
            <div className="tonymoly">{data.category}</div>
            <div className="productsName">{data.productName}</div>
            <Price data={data} />
            <TagList tags={data.tags} />
            <div className="grade">
                <span className="score">★ {data.reviewScore}</span>
                <span className="review">리뷰 {data.reviewCount}</span>
            </div>
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

export default Product;
