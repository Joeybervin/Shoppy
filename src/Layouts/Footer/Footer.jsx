/* Style */
import './footer.style.css';
/* Components */
import Mailto from '../../Components/Mailto';
/* logo */
/* Logo */
import logo from "../../assets/logo/logo.png";

export default function Footer() {
    return (
        <footer >
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
                    <h2>About Shoppy</h2>
                    <ul>
                        <li>About us</li>
                        <li>Ours products</li>
                        <li>Terms & Conditions</li>
                        <li>Career</li>
                    </ul>
                </div>

                {/* HELP */}
                <div className='help'>
                    <h2>help</h2>
                    <ul>
                        <li>Payment & return</li>
                        <li>Return & refund</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className='Contact'>
                    <h2>Cotaact Us</h2>
                    <ul>
                        <li><Mailto email="support@Shoppy.com">support@Shoppy.com</Mailto></li>
                        <li>021 - 254 - 558</li>
                        <li>Paris, FRANCE</li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM */}
            <div className='copyright'>
                <p>Copyright 2023 • All Rights Reserved Shoppy by Bervin Joey</p>
            </div>

        </footer>
    );
}
