/* style */
import './home.css';

/* imge */
import {catFashion, catShoes, catTech, catBag, catBeauty} from '../../assets/index';

/* layouts */
import Header from "../../Layouts/Header/Header";

/* components */
import TitleHighlight from '../../components/TitleHighlight';
import CategoryBox from '../../components/CategoryContainer' ;
import ServiceContainer from '../../components/ServiceContainer';
import {HomePageProductCard} from '../../components/ProductCard'; 
import {StyledCarousel} from '../../components/carousel/Carousel';





export default function Home() {


    const services = [
        { 
            service : "Free Delivery",
            detail : "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
            icon : "https://cdn-icons-png.flaticon.com/512/3142/3142246.png",
        },
        { 
            service : "Trusted Platfrom",
            detail : "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
            icon : "https://cdn-icons-png.flaticon.com/512/4185/4185148.png",
        },
        { 
            service : "Here For You",
            detail : "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
            icon : "https://cdn-icons-png.flaticon.com/512/1024/1024759.png",
        }
    ]

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

                <div>
                    <div className='horizontalCat'>
                    {/* FASHION */}
                    <CategoryBox 
                        category="fashion"
                        productsNumber="10"
                        src={catFashion}
                        alt="clothes"
                    />

                    {/* TECH */}
                    <CategoryBox 
                        category="Tech"
                        productsNumber="10"
                        src={catTech}
                        alt="a comuter , mac"
                    />
                    </div>

                    {/* cat: bag and shoes */}
                    <div className='verticalCat'>
                        {/* BAGS */}
                        <CategoryBox 
                            category="Bags"
                            productsNumber="10"
                            src={catBag}
                            alt="a tote bag"
                        />

                        {/* SHOES */}
                        <CategoryBox 
                            category="Shoes"
                            productsNumber="10"
                            src={catShoes}
                            alt="sneackers"
                        />
                        {/* SHOES */}
                        <CategoryBox 
                            category="Beauty"
                            productsNumber="10"
                            src={catBeauty}
                            alt="beauty products"
                        />
                    </div>
                        
                   
                    
                </div>

            </section>

            {/* section : services */}
            <section className='servicesSection'>
                <h2>Why choose Sho
                    <TitleHighlight color >ppy</TitleHighlight> ?</h2>
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
                <h2>Populer Products From 
                    <br />
                    All Brands
                </h2>
                <StyledCarousel>
                {["product", "product", "product", "product", "product", "product", "product", "product", "product", "product"].map((product, index) => {
                    return (

                        <HomePageProductCard
                            key={`hpp${index}`}
                            imgSrc="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                            imgAlt={product}
                            productName="product name"
                            productPrice="105"
                            onClick={() => console.log(index)}
                        />

                    )
                })}
                </StyledCarousel>
        
            </section>

    
        </div>
    );
}

