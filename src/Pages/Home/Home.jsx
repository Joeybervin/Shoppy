/* style */
import './home.css'
/* imge */
import {catFashion, catShoes, catTech, catBag, catBeauty} from '../../assets/index'
/* components */
import Section from '../../Components/Section'
import CategoryBox from '../../Components/CategoryBox' ;
/* layouts */
import Header from "../../Layouts/Header/Header";

export default function Home() {





    return (
        <div >
            {/* header */}
            < Header />
            {/* SECTIONS */} 

            {/* section : brands collaborations */}
            <Section className="collaborationSection">
                <h2>We Collaborate With 250++ Leading Top <br /> E-Commerce and Brands</h2>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png?20130107164928" alt="H&M" />
                    <img src="https://cdn.shopify.com/s/files/1/0904/1894/t/49/assets/logo-rsvp-768_2x.png" alt="rsvp paris" />
                    <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="nike" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="apple" />
                    <img src="https://cdn.shopify.com/s/files/1/1301/7071/files/maverickandco-logo_250x.png?v=1646708755" alt="Maverick & Co." />
                    <img src="https://logos-marques.com/wp-content/uploads/2020/06/Converse-Logo-2011.jpg" alt="converse" />
                </div>
            </Section>

            {/* section : categories */}
            <Section className='categoriesSection'>
                <h2>Browse Categories of
                    <br />
                    The Store
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

            </Section>
    
        </div>
    );
}

