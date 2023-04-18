/* hooks */
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
/* Data */
import productsData from "../../data/products.json";
import brandData from "../../data/brands.json";
import servicesData from "../../data/services.json";
import categoriesData from "../../data/categories.json";
/* components */
import { BigButton as Button, CategoryCard, ServiceCard, InfiniteSliderLoop, HomePageProductCard , Header } from "../../components/index";
import { SwiperSlide } from "swiper/react";
/* icons */
import { BiCrown, BiMailSend} from "react-icons/bi";
import { ImHeart } from "react-icons/im";
/* style */
import { StyledHome } from "./home.style";

export default function Home() {

    /*======= HOOKS =======*/
    const navigate = useNavigate();

    /*======= STATES =======*/
    const [newsletterSuscriber, setNewsletterSuscriber] = useState(false)

    /*======= FUNCTIONS =======*/
    // --------> create a raay with the word and length of your choice
    const CreateABigArray = (arraySize, arrayContent) => { 
        let index = 0;
        let array = [];
        while (index < arraySize ) {
            array.push(arrayContent)
            index++
        }
        return array;
    }

    // --------> display a message when the customer suscribe to the newsletter
    const handlenewsletterSubmit = (e) => { 
        e.preventDefault()
        setNewsletterSuscriber(!newsletterSuscriber)
    }


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
                                        onClick={() => navigate(`/shop/${product.category}/ref/${product.ref}`)}
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

                {/* section : clearpay */}
                <section className="clearpaySection">
                    <div>
                        <img src="assets/icons/clearpay.png" alt="clearpay - facilité de paiement en 3 fois" />
                        <p>Je l'aime. Je l'achète. Je le paie en 3 fois avec Clearpay.</p>
                        <p>Conditions gégénrales*</p>
                    </div>
                </section>

                {/* section : shoppy premier */}
                <section className="shoppyPremierSection">
                    <div>
                        <p>Shoppy premier <BiCrown size="0.6em" className="crown"/></p>
                        <p>Livraison 24h gratuire illimitée pendant une année entière pour 15€</p>
                        <p>Montant d'achat minimum et Conditions générales s'appliquent*</p>
                    </div>
                </section>

                {/* section :shoppy */}
                <section className="shoppySection">
                    <div>
                         {/* first streamer */}
                    <div>
                        <div>
                            {CreateABigArray(60,"Shoppy").map((el, index) => {
                                return (
                                    <p key={"1shoppy"+index}>{el}</p>
                                )
                            })}
                        </div>
                    </div>
                    {/* second streamer */}
                    <div>
                        <div>
                            {CreateABigArray(60,"Shoppy").map((el, index) => {
                                return (
                                    <p key={"2shoppy"+index}>{el}</p>
                                )
                            })}
                        </div>
                    </div>

                    </div>
                </section>
            
                {/* section : newsletter */}
                <section className="newsletterSection">
                    <div>
                        <p>Toujours au contact de la mode</p>
                        <p>En vous abonnant à notre newsletter, ne manquez rien des dernières tendances !</p>
                    </div>
                    <form method="POST" onSubmit={handlenewsletterSubmit}>
                        { !newsletterSuscriber ?
                        <div>
                            <input placeholder='E-mail' type="text" />
                            <button><BiMailSend /></button>
                        </div>
                        :
                        <p>Merci et à bientôt <ImHeart size="1.5em" color="#FF2B80" /></p>
                        }
                    </form>
                </section>

                {/* section : services */}
                <section className="servicesSection">
                    {servicesData.map((service, index) => {
                        return (
                            <ServiceCard
                                key={`sc${index}`}
                                iconSrc={service.icon}
                                iconAlt={service.service}
                                service={service.service}
                                serviceDetail={service.detail}
                            />
                        );
                    })}
                </section>


            </div>
        </StyledHome>
    );
}
