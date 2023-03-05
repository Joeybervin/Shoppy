import { useNavigate} from 'react-router-dom';

/* style */
import {StyledOrderConfirmation} from './orderConfirmation.style';


export default function OrderConfirmation() {

/*======= HOOKS =======*/
const navigate = useNavigate();
/*======= VARIABLES =======*/

/*======= STATE =======*/

/*======= USEEFFECT =======*/

/*======= FUNCTIONS =======*/

    return (
        <StyledOrderConfirmation>
            <p>Confirmation de commande</p>
            <div>
                <button onClick={()=> navigate('/')}>continuer mes achats</button>
            </div>
        </StyledOrderConfirmation>
    )
};
