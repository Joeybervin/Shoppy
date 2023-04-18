/* Hooks */
import { useState, useEffect, useMemo} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
/* Data */
import productsData from "../../data/products.json";
/* utils */
import { sortByPriceAscending, sortByPriceDescending, sortByAZ, filterByPriceRange } from '../../utils/filters';
/* components */
import { ShopPageProductCard as ProductCard } from "../../components/ui/ProductCard";
import {Select} from "../../components/ui/Select";
import {Empty} from "../../components/Empty";
/* icons */
import { HiOutlineChevronDown, HiOutlineFilter } from "react-icons/hi";
import { BsGenderAmbiguous, BsGenderFemale, BsGenderMale } from "react-icons/bs";
/* style */
import {StyledShop} from "./shop.style.js";

export default function Shop() {

    /*======= HOOKS =======*/
    const navigate = useNavigate();
    const location = useLocation();

    /*======= VARIABLES =======*/
    const data = useMemo(() => [...productsData], []); // --> the data
    const dataColorsList = Object.values([...new Set(data.map(product => product.color))]);
    let pricesList = ["Tous les prix" ,"0 - 10", "10 - 50", "50 - 100", "100 - 300", "300 - 500+"]; // --> slice of price 
    let sortList = ["Pertinence","Prix croissants", "Prix décroissants", "A - Z"]; //--> sorting of products

    /*======= STATES =======*/
    const [filterIsClosed, setFilterIsClosed] = useState(false) // close and open the filters choices list
    const [gender, setGender ] = useState(useParams().gender); // filter 1 => get the products list category
    const [category, setCategory ] = useState(useParams().ProductCategory); // filter 1 => get the products list category
    const [productsSortFilter, setProductsSortFilter] = useState("") // Filter 2 => organising products list
    const [productsPriceFilter, setProductsPriceFilter] = useState("") // filter 3  => price
    const [productColorFilter, setProductColorFilter] = useState("")
    const [productsList, setProductsList] = useState([]);

    /*======= USEEFFECT =======*/
    useEffect(() => { // get the click on the navbar to change the resukt
        const categoryName = location.pathname.split("/").pop();
        setCategory(categoryName);
    }, [location]);

    useEffect(()=> { // filter the data first with the URL and next with the customer preferencies
        const applyParams = (pertinenceFilter, priceFilter)  => {

           

            let filteredData = [...data];
            // --------> gender filter
            if (gender === "Uni") {
                filteredData = [...data]
            }
            else {
                filteredData = filteredData.filter((data) => data.gender === gender.charAt(0) || data.gender === "Uni")
            }; 
            
            // --------> category filter
            if (category !== "Tout") {
                filteredData = filteredData.filter((data) => data.category === category)
            };

            
            // --------> pertinence filter
            if (pertinenceFilter === "A - Z") {
                filteredData = sortByAZ(filteredData);
            } 
            else if (pertinenceFilter === "Prix croissants" ) {
                filteredData = sortByPriceAscending(filteredData);
            }
            else if (pertinenceFilter === "Prix décroissants" ) {
                filteredData = sortByPriceDescending(filteredData);
            }
            else if (pertinenceFilter === "" || pertinenceFilter === "Pertinence") {
                filteredData = [...filteredData]
            };
    
            // --------> price filter
            if (priceFilter === "0 - 10") {
                filteredData = filterByPriceRange(filteredData, 0, 10);
            }
            else if (priceFilter === "10 - 50") {
                filteredData = filterByPriceRange(filteredData, 10, 50);
            }
            else if (priceFilter === "50 - 100") {
                filteredData = filterByPriceRange(filteredData, 50, 100);
            }
            else if (priceFilter === "100 - 300") {
                filteredData = filterByPriceRange(filteredData, 100, 300);
            }
            else if (priceFilter === "300 - 500+") {
                filteredData = filterByPriceRange(filteredData, 300, Infinity);
            }
            else {
                filteredData = filteredData.filter((data) => Number(data.price) >= 0 )
            };
            // --------> color filter
            if (productColorFilter !== "" && productColorFilter !== "multi") {
                filteredData = filteredData.filter((data) => data.color === productColorFilter);
            }
            else if (productColorFilter === "multi") {
                filteredData = [...filteredData]
            };
            
        
            return filteredData;
        }
        
        setProductsList(applyParams(productsSortFilter, productsPriceFilter))
    }, [data, location, gender, category, productsSortFilter, productsPriceFilter, productColorFilter])


    /*======= FUNCTIONS =======*/

    // --------> filter data by category
    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        navigate(`/shop/${gender}/${newCategory}`);
    };

    // --------> filter data by pertinence + pricerange + gender
    const handleDataFilter = (e, filter) => {
        if (filter === "pertinence") setProductsSortFilter(e.target.value)
        if (filter === "price") setProductsPriceFilter(e.target.value)
        if (filter === "Female" || filter === "Male" || filter === "Uni") {
            setGender(filter)
            navigate(`/shop/${filter}/${category}`)
        }
    }

    // --------> clean all the filter
    const handleFiltersClean = () => {
        setProductsPriceFilter("Tous les prix")
        setProductColorFilter("multi")
        setProductsSortFilter("Pertinence")
    }

    return (
        <StyledShop>

            {/* FILTRES : gender, cat, price range, pertinence, color, clean */}
            <div>
                <div className="gender">
                    <p  className={gender === "Female" ? "selected" : null} onClick={(e) => handleDataFilter(e,"Female")}><BsGenderFemale/> Femme</p>
                    <p className={gender === "Uni" ? "selected" : null}  onClick={(e) => handleDataFilter(e,"Uni")}><BsGenderAmbiguous /> UNIgender</p>
                    <p className={gender === "Male" ? "selected" : null}  onClick={(e) => handleDataFilter(e,"Male")}><BsGenderMale /> Homme</p>
                </div>
                <div  className="filtersToogle" onClick={() => setFilterIsClosed(!filterIsClosed)}>
                    <HiOutlineFilter />
                    <p>Filter </p>
                    <HiOutlineChevronDown />
                </div>
                <div className={`filters ${filterIsClosed ? "filterIsOpen" : "filterIsClosed"}`}>
                    {/* categories */}
                    <Select
                        value={category}
                        onChange={handleCategoryChange}
                        name={"categories"}
                        label={"Type de produit"}
                        optionsList={["Tout", ...new Set(data.map (product => product.category))]}
                    />
                    {/* price */}
                    <Select
                        empty
                        value={productsPriceFilter}
                        onChange={(e) => handleDataFilter(e, "price") }
                        name={"price"}
                        label={"Gamme de prix"}
                        optionsList={pricesList}
                    />
                    {/* pertinence */}
                    <Select
                        empty
                        value={productsSortFilter}
                        onChange={(e) => handleDataFilter(e, "pertinence") }
                        name={"sort"}
                        label={"Trier"}
                        optionsList={sortList}
                    />
                    {/* color */}
                    <div className="colorFilter">
                        <p>Couleur</p>
                        <div className="colorsList">
                            {dataColorsList.map((color, index) => {
                                return (
                                    <div onClick={() => {setProductColorFilter(color)}} className="productColor" key={"color"+index} style={{border : `1px solid ${color}`}}>
                                        <div style={{backgroundColor : `${color}`}} ></div>
                                    </div>
                                )
                            })}
                            <div onClick={() => {setProductColorFilter("multi")}} className="multi" key={"color"+dataColorsList.lenght + 1} >
                                <div></div>
                            </div>
                            

                        </div>

                    </div>
                    {/* filters clean */}
                    <p onClick={()=> {handleFiltersClean()}}>annuler tous les filtres</p>
                </div>
            </div>

            {/* PRODUCTLIST */}
            <div className="productsList">
                { productsList.length === 0 ?
                    <Empty 
                    messageTitle="0 style trouvé"
                    message="Peut-être un pe trop stylé à notre goût !"/> : 
                    productsList.map((product, index) => {
                        return (
                            <ProductCard
                                className="productCard"
                                key={index}
                                imgSrc={product.productImage[0]}
                                imgAlt={product.productName}
                                productName={product.productName.length > 18 ? product.productName.substring(0, 18) + "...": product.productName}
                                productPrice={product.price}
                                onClick={() => navigate(`/shop/${product.category}/ref/${product.ref}`)}
                            />
                        );
                    })
                    
                    }
            </div>
        </StyledShop>
    );
}
