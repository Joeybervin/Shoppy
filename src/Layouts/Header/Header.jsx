/* style */
import { StyledHeader } from "../../Layouts/Header/header.style";
/* Components */
import { BigButton } from "../../components/Button";
/* Assets */
import heroImage from "../../assets/hero/candid.jpg"


export default function Header() {
    return (
        <StyledHeader >
            {/* text */}
            <div>
                <h1>Best Place to Buy
                    <br/>
                    <span>Everything.</span>
                </h1>
                <p>At Bachira, you can shop for all your favorite beauty brands, clothes, household products and more at a single place.</p>
                <BigButton primary shadow>Shopping Now</BigButton>
            </div>
            {/* Image */}
            <div className="heroImage">
                <img src={heroImage} alt="candid from unsplash" />
            </div>
        </StyledHeader>
    );
}