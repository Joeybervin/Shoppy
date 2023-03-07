/* data */
import productData from "../../data/products";
/* hooks */
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
/* slice */
import  { addToCart }  from '../../store/slices/cartSlice' ;
import { addProductToWishlist, removeProducFromWishlist } from '../../store/slices/userSlice';
/* hooks */
import  {fetchData}  from '../../utils/index'
/* component */
import { BigButton as Button } from "../../components/ui/Button";
import { RadioInput as Radio, RadioLabel } from "../../components/ui/Input";
import Badge from "../../components/ui/Badge";
import { ThumbsGalleryLoop } from "../../components/ThumbsGalleryLoop/ThumbsGalleryLoop";
/* Icons */
import {
    BsCartPlus, BsStarFill, BsStar, BsStarHalf, BsHeart, BsHeartFill} from "react-icons/bs";
/* style */
import ProductStyle from "./product.style";

export default function Product() {
    /*======= HOOKS =======*/
    const { refProduct } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /*======= VARIABLES =======*/
    let data = productData;
    let product = data.find((product) => product.ref === refProduct);
    let user = useSelector(state => state.user);
    let starsList = [];
    let productSizesList = []
    let inUserWishList = user.wishlist.includes(refProduct);

    /*======= STATES =======*/
    const [like, setLike] = useState(false); /* Change if the product is in the user wishlist */
    const [detailSelected, setDetailSelected] = useState("description");
    const [sizeSelected, setSizeSelected] = useState(null);

    /*======= FUNCTIONS =======*/
    const productSizes = (category) => {
        if (category === "chaussures") {
            productSizesList = ["36", "37", "38", "39", "40", "41", "42", "43"];
        }
        else if (category === "vetements") {
            productSizesList = ["XS", "S", "M", "L", "XL", "XXL"];
        }
        else {
            productSizesList = ["-"];
        }
        return productSizesList
    }
    /* calculate the number of stars to put "full", "half", "empty" */
    const stars = (note) => {
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

    const addToWishList = async () => {
        if (user.token !== "" && !inUserWishList) {
            const response = await  fetchData('/user/addToWishlist', {email : user.email, productref : refProduct}, 'PUT')
            if (response.status === "success") {
                setLike(!like)
                dispatch(addProductToWishlist(refProduct))
            }

        }
        else if (user.token !== "" && inUserWishList) {
            const response = await  fetchData('/user/removeFromWishlist', {email : user.email, productref : refProduct}, 'PUT')
            if (response.status === "success") {
                setLike(false)
                dispatch(removeProducFromWishlist(refProduct))
            }
        }
    };

    const addProductToCart = (event) => {

        const productInfos = {
            ref : product.ref ,
            productName : product.productName ,
            color : product.color ,
            price : product.price  ,
            productImage : product.productImage[0] ,
            productSize : sizeSelected ,
            quantity : 1,
        }
        dispatch(addToCart(productInfos)) // send to slice the product to add to cart
        if (event === "buy now") {
            navigate("/commande/panier") // redirect the user to the cart page
        }
    };

    return (
        <ProductStyle>
            {/* images */}
            <div className="productImages">
                {/* swiper */}
                <div className="ThumbsGallery">
                    <ThumbsGalleryLoop img={product.productImage} />
                </div>
            </div>

            {/* details */}
            <div className="productDetails">

                {/* badges & wishlist */}
                <div className="wishlist">

                    {/* BADGES */}
                    <div className="badges">
                        {product?.badges?.map((badge, index) => {
                            return <Badge key={index}>{badge}</Badge>;
                        })}
                    </div>

                    {/* WISHLIST */}
                    <div onClick={() => addToWishList()} className="like">
                        {like || inUserWishList ? (
                            <BsHeartFill
                                size="1.9rem"
                                style={{ color: "red" }}
                            />
                        ) : (
                            <BsHeart
                                size="1.5rem"
                                style={{ color: "red" }}
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
                    <div className="radioButtonGroup">
                        {["Description","Marque","Infos+"].map((el, index) => {
                                return (
                                    <div key={index}>
                                        <Radio
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
                        <div className="radioButtonGroup">
                            {productSizes(product.category).map((size, index) => {
                                return (
                                    <div key={index}>
                                    <Radio
                                        checked={sizeSelected === size}
                                        onChange={(e) => setSizeSelected(e.target.value)}
                                        className="sizeButton"
                                        value={size}
                                        name="size"
                                        id={"size"+index}
                                    />
                                    <RadioLabel key={index} htmlFor={"size"+index} className="sizeLabel">
                                        {size}
                                    </RadioLabel>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="cart">
                    
                        <Button disabled={sizeSelected === null} onClick={() => addProductToCart("buy now")}> Acheter </Button>
                        <Button disabled={sizeSelected === null} primary onClick={() => addProductToCart("add to cart")}> Ajouter <BsCartPlus /></Button>
                    
                </div>
            </div>
        </ProductStyle>
    );
}
