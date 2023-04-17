/* Components */
import { BigButton as Button } from "../../ui/Button";
/* icons */
import { BsChevronDown } from "react-icons/bs";
/* style */
import { StyledHeader } from "./header.style";

export const  Header = () =>{
    return (
        <StyledHeader>

            {/* BACKGROUND IMAGE */}
            <div className="headerImageContainer">
                <img
                    className="headerImg"
                    src="https://images.unsplash.com/photo-1623892866965-a832c7a46c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
            </div>

            {/* SLOGAN */}
            <div className="headerTextContainer">
                <div>
                <h1>Sans aucune limite <span>Shoppy</span></h1>

                </div>
               

                <Button primary shadow>
                    Nouvelle collection
                </Button>

                <a href=".collaborationSection">
                    <BsChevronDown color="white" size="1.5rem" />
                </a>
            </div>
        </StyledHeader>
    );
}
