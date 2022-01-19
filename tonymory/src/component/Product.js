import "../css/common.css";
import "../css/mainPage.css";
import { ImgLoad } from "./ImgLoader";
import { A } from "./util/Common";

//추천상품 이미지
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

function Product({ data }) {
    return (
        <li className="productsList">
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
            <Banefit banefit={data.benefits} />
            <div className="tonymoly">{data.category}</div>
            <div className="productsName">{data.productName}</div>
            <Price data={data} />
            <TagList tags={data.tags} />
            <div className="grade">
                <span className="score">★ {data.reviewScore}</span>
                <span className="review">리뷰 {data.reviewCount}</span>
            </div>
        </li>
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
        tagArr.push(<span className="flag">{tags[i]}</span>)
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