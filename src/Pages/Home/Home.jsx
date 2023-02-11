/* hooks */
import { useNavigate } from "react-router-dom";

/* assets */
import {catFashion, catShoes, catTech, catBag, catBeauty} from '../../assets/index';

/* layouts */
import Header from "../../Layouts/Header/Header";

/* components */
import TitleHighlight from '../../components/TitleHighlight';
import CategoryBox from '../../components/CategoryContainer' ;
import ServiceContainer from '../../components/ServiceContainer';
import {HomePageProductCard} from '../../components/ProductCard'; 
import StyledCarousel from '../../components/carousel/Carousel';

/* Data */
import productsData from "../../data/products.json";
import servicesData from "../../data/services.json";

/* style */
import './home.css';

export default function Home() {

    /* hooks */
    const navigate = useNavigate()

    /* variables */
    const services = [...servicesData] 
    const data = [...productsData]




    
    

    return (
        <div className='home'>

            {/* HEADER */}
            < Header />

            {/* SECTIONS */} 

            {/* section : brands collaborations */}
            <section className="collaborationSection" >
                <h2>Nous collaborons avec
                    <br />
                    <TitleHighlight highlight >plus de 250+</TitleHighlight>
                    <br />
                    marques et boutiques en ligne</h2>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png?20130107164928" alt="H&M" />
                    <img src="https://cdn.shopify.com/s/files/1/0904/1894/t/49/assets/logo-rsvp-768_2x.png" alt="rsvp paris" />
                    <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="nike" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="apple" />
                    <img src="https://cdn.shopify.com/s/files/1/1301/7071/files/maverickandco-logo_250x.png?v=1646708755" alt="Maverick & Co." />
                    <img src="https://logos-marques.com/wp-content/uploads/2020/06/Converse-Logo-2011.jpg" alt="converse" />
                </div>
            </section>

            {/* section : categories */}
            <section className='categoriesSection'>
                <h2>Découvrez toutes nos
                    <br />
                    catégories
                </h2>
                {/* CATEGORIES CARDS */}
                <div>
                    {/* category : fashion and tech */}
                    <div className='horizontalCat'>
                    {/* FASHION */}
                    <CategoryBox 
                        category="fashion"
                        productsNumber="10"
                        src={catFashion}
                        alt="clothes"
                        onClick={() => navigate("/shop/fashion")}
                    />

                    {/* TECH */}
                    <CategoryBox 
                        category="Tech"
                        productsNumber="10"
                        src={catTech}
                        alt="a comuter , mac"
                        onClick={() => navigate("/shop/tech")}
                    />
                    </div>

                    {/* category : bag and shoes */}
                    <div className='verticalCat'>
                        {/* BAGS */}
                        <CategoryBox 
                            category="Bag"
                            productsNumber="10"
                            src={catBag}
                            alt="a tote bag"
                            onClick={() => navigate("/shop/bag")}
                        />

                        {/* SHOES */}
                        <CategoryBox 
                            category="Shoes"
                            productsNumber="10"
                            src={catShoes}
                            alt="sneackers"
                            onClick={() => navigate("/shop/shoes")}
                        />
                        {/* BEAUTY */}
                        <CategoryBox 
                            category="Beauty"
                            productsNumber="10"
                            src={catBeauty}
                            alt="beauty products"
                            onClick={() => navigate("/shop/beauty")}
                        />
                    </div>
                </div>

            </section>

            {/* section : services */}
            <section className='servicesSection'>
                <h2>Pourquoi Sho<TitleHighlight $color >ppy</TitleHighlight> ?</h2>
                <div>
                    {
                        services.map((service, index) =>{
                            return (
                                <ServiceContainer 
                                key={`sc${index}`}
                                iconSrc={service.icon}
                                iconAlt={service.service}
                                service={service.service}
                                serviceDetail={service.detail}
                                />
                            )
                        })
                    }
                    
                </div>
            </section>

            {/* section : products */}
            <section className='productsSection'>
                <h2>Nos produits</h2>
                <StyledCarousel>
                {data.map((product, index) => {
                    return (

                        <HomePageProductCard
                            key={`hpp${index}`}
                            imgSrc={product.productImage}
                            imgAlt={product.productName}
                            productName={product.productName}
                            productPrice={product.price}
                            onClick={() => navigate(`/shop/${product.category}/product/${product.ref}`)}
                        />

                    )
                })}
                </StyledCarousel>
        
            </section>

    
        </div>
    );
}

