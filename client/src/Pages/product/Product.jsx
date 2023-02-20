/* hooks */
import { useState } from "react";
import { useParams } from "react-router-dom";

/* component */
import { BigButton, SmallButton } from "../../components/ui/Button";
import { RadioInput, RadioLabel } from "../../components/ui/Input";
import Badge from "../../components/ui/Badge";
import { ThumbsGalleryLoopPart } from "../../components/Swiper";

/* Icons */
import {
    BsCartPlus, BsStarFill, BsStar, BsStarHalf, BsHeart, BsHeartFill} from "react-icons/bs";

/* data */
import productData from "../../data/products";

/* style */
import ProductStyle from "./product.style";

export default function Product() {
    /* hooks */
    const { refProduct } = useParams();

    /* variables */
    let data = productData;
    let product = data.find((product) => product.ref === refProduct);
    let starsList = [];
    let productSizesList = []

    /* states */
    const [like, setLike] = useState(false); /* Change if the product is in the user wishlist */
    const [detailSelected, setDetailSelected] = useState("description");
    const [sizeSelected, setSizeSelected] = useState(null);
    console.log(sizeSelected)

    /* -------------------------------------------------------------------------------------------------------------------------------------- */
    /* ----------  FUNCTIONS */
    /* -------------------------------------------------------------------------------------------------------------------------------------- */

    let productSizes = (category) => {
        if (category === "shoes") {
            productSizesList = ["36", "37", "38", "39", "40", "41", "42", "43"];
        }
        else if (category === "fashion") {
            productSizesList = ["XS", "S", "M", "L", "XL", "XXL"];
        }
        else {
            productSizesList = ["-"];
        }
        return productSizesList
    }
    /* calculate the number of stars to put "full", "half", "empty" */
    let stars = (note) => {
        let minimum = Math.floor(Number(note));
 
        for (let i = 0; i < 5; i++) {
            if (Number(note) === minimum) {
                if (i <= minimum - 1) {
                    starsList.push("full");
                } else {
                    starsList.push("empty");
                }
            } else {
                if (i <= minimum - 1) {
                    starsList.push("full");
                } else if (i === minimum) {
                    starsList.push("half");
                } else {
                    starsList.push("empty");
                }
            }
        }
        return starsList;
    };



    return (
        <ProductStyle>
            {/* images */}
            <div className="productImages">
                {/* swiper */}
                <div className="ThumbsGallery">
                    <ThumbsGalleryLoopPart img={product.productImage} />
                </div>
            </div>

            {/* details */}
            <div className="productDetails">

                {/* badges & wishlist */}
                <div className="wishlist">

                    {/* BADGES */}
                    <div className="badges">
                        {product.badges.map((badge, index) => {
                            return <Badge key={index}>{badge}</Badge>;
                        })}
                    </div>

                    {/* WISHLIST */}
                    <div className="like">
                        {like === true ? (
                            <BsHeartFill
                                size="1.9rem"
                                style={{ color: "red" }}
                                onClick={() => setLike(false)}
                            />
                        ) : (
                            <BsHeart
                                size="1.5rem"
                                style={{ color: "red" }}
                                onClick={() => setLike(!like)}
                            />
                        )}
                    </div>
                </div>

                {/* product name */}
                <p className="productName">{product.productName}</p>

                {/* product price */}
                <p className="productPrice">{product.price} <span>€</span></p>

                {/* product color */}
                <div className="color">
                        <p>Couleur : </p>
                            <div style={{border : `1px solid ${product.color}`}}>
                                <div style={{backgroundColor : `${product.color}`}} className="productColor"></div>
                            </div>
                    </div>

                {/* product review */}
                <div className="review">
                    <div className="stars">
                        {stars(product.note).map((star, index) => {
                            if (star === "full") { return <BsStarFill size="1.2em" key={index} />}
                            else if (star === "half") {return <BsStarHalf size="1.2em" key={index} />}
                            else { return <BsStar size="1.2em" key={index} /> }
                        })}
                    </div>
                    <p>{product.reviews !== null ? product.reviews : "0"} avis</p>
                </div>

                {/* details */}
                <div className="details">
                    <div className="radioInputGroup">
                        {["Description","Marque","Infos+"].map((el, index) => {
                                return (
                                    <div key={index}>
                                        <RadioInput
                                            checked={detailSelected === el.toLowerCase()}
                                            onChange={(e) => setDetailSelected(e.target.value)}
                                            className="detailInput"
                                            value={el.toLowerCase()}
                                            name="detail"
                                            id={"detail"+index}
                                        />
                                        <RadioLabel key={index} htmlFor={"detail"+index} className="detailLabel">
                                            {el}
                                        </RadioLabel>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div>
                    {detailSelected === "description" && (<p>{product.description.productDescription === "" ? "non spécifié" : product.description.productDescription} </p>)}
                    {detailSelected === "marque" &&  <p>{product.brand === "" ? "non spécifié" : product.brand}</p>}
                    {detailSelected === "infos+" && (<p>{product.description.productEntretien === "" ? "non spécifié" : product.description.productEntretien} </p>)}
                    </div>
                    
                </div>

                {/* order detail */}
                <div className="orderDetails">

                    {/* size */}
                    <div className="size">
                        <p>Taille : <span>Sélectionner  une taille</span></p>
                        <div>
                            {productSizes(product.category).map((size, index) => {
                                return (
                                    <SmallButton 
                                    primary
                                    className="sizeButton"
                                        key={index}
                                        checked={sizeSelected === size}
                                        onClick={(e) => setSizeSelected(e.target.value)}
                                        value={size}
                                        name="size"
                                    >
                                    {size}
                                    </SmallButton>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="cart">
                    
                        <BigButton> Acheter </BigButton>
                        <BigButton primary> Ajouter <BsCartPlus /></BigButton>
                    
                </div>
            </div>
        </ProductStyle>
    );
}
