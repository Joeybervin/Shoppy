/* Hooks */
import { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

/* components */
import { ShopPageProductCard } from "../../components/ProductCard";
import Select from "../../components/Select";

/* style */
import "./shop.css";

/* icons */
import { HiOutlineChevronDown, HiOutlineFilter } from "react-icons/hi";

/* Data */
import productsData from "../../data/products.json";

export default function Shop() {
    /* hooks */
    const { category } = useParams();
    const navigate = useNavigate();

    /* variables */
    let data = [...productsData] /* copy of the data */
    let productsCategoryList = data.filter((data) => data.category === category) /* filtered data with the params => category choose */
    let categoriesList = []; /* regroup all the categories in the data */
    let pricesList = ["tous les prix" ,"0 - 10", "10 - 50", "50 - 100", "100 - 300", "300 - 500+"]; /* slice of price */
    let sortList = ["pertinence", "prix croissant", "prix décroissant"]

    /* states */
    const [filterIsClosed, setFilterIsClosed] = useState(false)
    const [productsSortFilter, setProductSortFilter] = useState()
    const [productsPriceFilter, setProductsPriceFilter] = useState() /* slice of price choose by the user */
    const [productsList, setProductsList] = useState([...productsCategoryList]) 



    /* -------------------------------------------------------------------------------------------------------------------------------------- */
    /* ----------  FUNCTIONS */
    /* -------------------------------------------------------------------------------------------------------------------------------------- */

    /* Create an array of the caracteristic of the product(s) */
    const productCaracteristic = (data, caracteristicsList) => {
        data.forEach((product) => {
            if (product.category === category) {
                caracteristicsList.unshift(product.category);
            } else {
                caracteristicsList.push(product.category);
            }
        });
        caracteristicsList = [...new Set(caracteristicsList)];
        return caracteristicsList;
    };
    
    /* Filter part */
    /* pertinence */
    const handdlePertinenceChange = (e) => {
        if (e.target.value === "prix croissant" ) {
            setProductsList(productsCategoryList.sort((a, b) => a.price - b.price))
        }
        else if (e.target.value === "prix décroissant" ) {
            setProductsList(productsCategoryList.sort((a, b) => b.price - a.price))
        }
        else {
            setProductsList(productsCategoryList)
        }
        setProductSortFilter(e.target.value)
    }
    /* category */
    const handdleCategoryChange = (e) => {
        setProductsList(data.filter((data) => data.category === e.target.value))
        navigate(`/shop/${e.target.value}`);
    };
    /* price */
    const handdlePriceChange = (e) => {
        if (e.target.value === "0 - 10") {
            setProductsList(productsCategoryList.filter((data) => Number(data.price) <= 10))
        }
        else if (e.target.value === "10 - 50") {
            setProductsList(productsCategoryList.filter((data) => Number(data.price) >= 10  && data.price <= 50))
        }
        else if (e.target.value === "50 - 100") {
            setProductsList(productsCategoryList.filter((data) => Number(data.price) >= 50  && data.price <= 100))
        }
        else if (e.target.value === "100 - 300") {
            setProductsList(productsCategoryList.filter((data) => Number(data.price) >= 100  && data.price <= 300))
        }
        else if (e.target.value === "300 - 500+") {
            setProductsList(productsCategoryList.filter((data) => Number(data.price) >= 300 ))
        }
        else {
            setProductsList(productsCategoryList.filter((data) => Number(data.price) >= 0 ))
        }
        setProductsPriceFilter(e.target.value)
    };

    return (
        <div className="shop">
            {/* FILTRES */}
            <div>

                <div onClick={() => setFilterIsClosed(!filterIsClosed)}>
                    <HiOutlineFilter />
                    <p>Filter </p>
                    <HiOutlineChevronDown />
                </div>
                
                <div className={`filtre ${filterIsClosed ? "filterIsOpen" : "filterIsClosed"}`}>
                    {/* catégories */}
                    <Select
                        value={category}
                        onChange={handdleCategoryChange}
                        name={"categories"}
                        label={"Catégories"}
                        optionsList={productCaracteristic(productsData, categoriesList)}
                    />
                    {/* prix */}
                    <Select
                        empty
                        value={productsPriceFilter}
                        onChange={handdlePriceChange}
                        name={"price"}
                        label={"Prix"}
                        optionsList={pricesList}
                    />
                    {/* prix */}
                    <Select
                        empty
                        value={productsSortFilter}
                        onChange={handdlePertinenceChange}
                        name={"sort"}
                        label={"Trier"}
                        optionsList={sortList}
                    />
                </div>
            </div>
            
            <div className="productsList">
                { productsList.length === 0 ?
                    <p>Vide</p> : 
                    productsList.map((product, index) => {
                        return (
                            <ShopPageProductCard
                                key={index}
                                imgSrc={product.productImage[0]}
                                imgAlt={product.productName}
                                productName={product.productName.length > 18 ? product.productName.substring(0, 18) + "...": product.productName}
                                productPrice={product.price}
                                onClick={() => navigate(`/shop/${product.category}/product/${product.ref}`)}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
