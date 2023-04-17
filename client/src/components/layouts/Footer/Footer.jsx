import { Link } from 'react-router-dom';
/* Style */
import './footer.style.js';
/* Components */
import Mailto from '../../Mailto';
import {StyledFooter} from './footer.style'
/* Logo */
import logo from "../../../assets/logo/logo.png";
/* icons */
import { SlSocialLinkedin, SlSocialInstagram, SlSocialPintarest, SlSocialYoutube, SlSocialTwitter, SlSocialFacebook } from "react-icons/sl";


export default function Footer() {
    return (
        <StyledFooter >

            <div>

                {/* TOP */}
            <div className='footerNavigation'>

{/* Brand */}
<div className='brand'>
    <img src={logo} alt="Shoppy"/>
    <p>Shoppy is an online store dealing with all product
    Shppy provide cheap, high quality, products to
    customers</p>
</div>

{/* About Shoppy */}
<div className='aboutShoppy'>
    <p>About Shoppy</p>
    <ul>
        <li>About us</li>
        <li>Ours products</li>
        <li>Terms & Conditions</li>
        <li>Career</li>
    </ul>
</div>

{/* HELP */}
<div className='help'>
    <p>help</p>
    <ul>
        <li>Payment & return</li>
        <li>Return & refund</li>
        <li>FAQ</li>
    </ul>
</div>

{/* Contact */}
<div className='Contact'>
    <p>Contact Us</p>
    <ul>
        <li><Mailto email="support@Shoppy.com">support@Shoppy.com</Mailto></li>
        <li>021 - 254 - 558</li>
        <li>Paris, FRANCE</li>
    </ul>
</div>

</div>

{/* BOTTOM */}
<div className='socialNetwork'>
<Link to="#"><SlSocialLinkedin size="1.3rem" /></Link>
<Link to="#"><SlSocialInstagram size="1.3rem"/></Link>
<Link to="#"><SlSocialPintarest size="1.3rem"/></Link>
<Link to="#"><SlSocialYoutube size="1.3rem"/></Link>
<Link to="#"><SlSocialTwitter size="1.3rem"/></Link>
<Link to="#"><SlSocialFacebook size="1.3rem"/></Link>
</div>
<div className='copyright'>
<p>Copyright 2023 • All Rights Reserved Shoppy by Bervin Joey</p>
</div>

            </div>
            

        </StyledFooter>
    );
}
