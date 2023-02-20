/* style */
import { StyledHeader } from "./header.style";
/* Components */
import { BigButton } from "../../ui/Button";
/* Assets */
import heroImage from "../../../assets/hero/candid.jpg"


export default function Header() {
    return (
        <StyledHeader >
            {/* text */}
            <div>
                <h1>Où ailleurs que
                    <br/>
                    <span>Shoppy !</span>
                </h1>
                <p>Chez Shoppy, vous pouvez acheter toutes vos marques de beauté préférées, des vêtements, des produits tech et plus encore et tout cela réunis à un seul endroit.</p>
                <BigButton primary shadow>Découvrir Shoppy</BigButton>
            </div>
            {/* Image */}
            <div className="heroImage">
                <img src={heroImage} alt="candid from unsplash" />
            </div>
        </StyledHeader>
    );
}