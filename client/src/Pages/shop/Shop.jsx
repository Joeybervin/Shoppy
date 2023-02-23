/* Data */
import productsData from "../../data/products.json";
/* Hooks */
import { useState, useEffect, useMemo} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UseDispatch, useSelector} from 'react-redux'
/* utils */
import shuffle from '../../utils/shuffle';
/* components */
import { ShopPageProductCard as ProductCard } from "../../components/ui/ProductCard";
import Select from "../../components/ui/Select";
/* icons */
import { HiOutlineChevronDown, HiOutlineFilter } from "react-icons/hi";
/* style */
import "./shop.css";


export default function Shop() {
    /* hooks */
    
    const navigate = useNavigate();
    /* variables */

    const data = [...productsData];
    const shuffleData = shuffle(data)

   
    /* filtered data with the params => category choose */
 
    let pricesList = ["tous les prix" ,"0 - 10", "10 - 50", "50 - 100", "100 - 300", "300 - 500+"]; /* slice of price */
    let sortList = ["pertinence", "prix croissant", "prix décroissant"] // sorting of products

    /* states */
    const [filterIsClosed, setFilterIsClosed] = useState(false) // close and open the filters choices list
    const [category, setCategory ] = useState(useParams().category); // filter 1 => get the products list category
    const [productsSortFilter, setProductSortFilter] = useState() // Filter 2 => organising products list
    const [productsPriceFilter, setProductsPriceFilter] = useState() // filter 3  => price
    const [productsList, setProductsList] = useState(category === "Tout" ? shuffleData : data.filter((data) => data.category === category));






    /* -------------------------------------------------------------------------------------------------------------------------------------- */
    /* ----------  FUNCTIONS */
    /* -------------------------------------------------------------------------------------------------------------------------------------- */

    /* Filter part */
    /* pertinence */
    const handdlePertinenceChange = (e) => {
        if (e.target.value === "prix croissant" ) {
            setProductsList(productsList.sort((a, b) => a.price - b.price))
        }
        else if (e.target.value === "prix décroissant" ) {
            setProductsList(productsList.sort((a, b) => b.price - a.price))
        }
        else {
            setProductsList(productsList)
        }
        setProductSortFilter(e.target.value)
    }
    /* category */
    const handdleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        setProductsList( data.filter((data) => newCategory === 'Tout' ||  data.category === newCategory))
        navigate(`/shop/${newCategory}`);
    };
    /* price */
    const handdlePriceChange = (e) => {
        if (e.target.value === "0 - 10") {
            setProductsList(productsList.filter((data) => Number(data.price) <= 10))
        }
        else if (e.target.value === "10 - 50") {
            setProductsList(productsList.filter((data) => Number(data.price) >= 10  && data.price <= 50))
        }
        else if (e.target.value === "50 - 100") {
            setProductsList(productsList.filter((data) => Number(data.price) >= 50  && data.price <= 100))
        }
        else if (e.target.value === "100 - 300") {
            setProductsList(productsList.filter((data) => Number(data.price) >= 100  && data.price <= 300))
        }
        else if (e.target.value === "300 - 500+") {
            setProductsList(productsList.filter((data) => Number(data.price) >= 300 ))
        }
        else {
            setProductsList(productsList.filter((data) => Number(data.price) >= 0 ))
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
                        optionsList={["Tout", ...new Set(data.map (product => product.category))]}
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
                            <ProductCard
                                className="productCard"
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
