/* hooks */
import { useNavigate } from "react-router-dom";


/* layouts */
import Header from "../../components/layouts/Header/Header";

/* components */
import { BigButton as Button } from "../../components/ui/Button" ;
import TitleHighlight from "../../components/TitleHighlight";
import CategoryCard from "../../components/ui/CategoryCard";
import ServiceContainer from "../../components/ServiceCard";
import InfiniteSliderLoop from "../../components/InfiniteSliderLoop/InfiniteSliderLoop";
import { HomePageProductCard } from "../../components/ui/ProductCard";
import { SwiperSlide } from "swiper/react";

/* Data */
import productsData from "../../data/products.json";
import brandData from "../../data/brands.json";
import servicesData from "../../data/services.json";
import categoriesData from "../../data/categories.json";

/* style */
import { StyledHome } from "./home.style";

export default function Home() {
    /* hooks */
    const navigate = useNavigate();

    /* variables */
    const services = [...servicesData];

    return (
        <StyledHome>
            <div className="home">
                {/* HEADER */}
                <Header />

                {/* SECTIONS */}

                {/* section : brands collaborations */}
                <section className="collaborationSection">
                    <div>
                        {brandData.map((brand, index) => {
                            return (
                                <img key={"brand" + index} src={brand.img} alt={brand.brand} />
                            );
                        })}
                    </div>
                </section>

                {/* section : membershipt */}
                <section className="membershipSection">
                    <div>
                        <h2>Envie de -10% ? Devenez membre ⭐</h2>
                        <p>Abonnez-vous maintenant pour profiter d'offres spéciales, d'événements exclusifs et bien plus encore.</p>
                        <Button primary shadow>Devenir membre</Button>

                    </div>
                
                </section>

                {/* section : categories */}
                <section className="categoriesSection">
                    <h2>catégories</h2>
                    <div className="slideContainer">
                        <div className="slide">
                            {categoriesData.map((category, index) => {
                                return (
                                    <CategoryCard
                                    key={"cat"+index}
                                    category={category.category_name}
                                    src={category.category_img}
                                    alt={category.alt}
                                    onClick={() => navigate(`/shop/${category.gender}/${category.category_id}`)}
                                />
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* section : products */}
                <section className="productsSection">
                    <h2>Nos nouveautés</h2>
                    <div className="carousel-container">
                        <InfiniteSliderLoop>
                            {productsData.map((product, index) => {
                                return(
                                    <SwiperSlide 
                                        onClick={() => navigate(`/shop/fashion/product/${product.ref}`)}
                                        key={'img'+index}
                                    >
                                        <HomePageProductCard
                                            imgSrc={product.productImage[0]}
                                            imgAlt={product.type}
                                            productName={product.productName}
                                            productPrice={product.price}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </InfiniteSliderLoop>

                    </div>
                </section>

                {/* section : services */}
                <section className="servicesSection">
                    {services.map((service, index) => {
                        return (
                            <ServiceContainer
                                key={`sc${index}`}
                                iconSrc={service.icon}
                                iconAlt={service.service}
                                service={service.service}
                                serviceDetail={service.detail}
                            />
                        );
                    })}
                </section>

                <section className="clearpayPayment">
                    <div>
                        <img src="/icons/clearpay.png" alt="clearpay - facilité de paiement en 3 fois" />
                        <p>Je l'aime. Je l'achète. Je le paie en 3 fois avec Clearpay.</p>
                        <p>Conditions gégénrales</p>
                    </div>
                </section>

                <section className="newsletter"></section>

                <section className="Sale"></section>


            </div>
        </StyledHome>
    );
}
