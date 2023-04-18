import { useNavigate } from 'react-router-dom';
/* COMPONENTS */
import { BigButton as Button} from '../../../components/index';
/*  STYLE */
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
                <img src="https://images.unsplash.com/photo-1594723768087-96f21e7887a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="merci - Caleb Chen - Unsplash" />
            </div>
            <p>Vous recevrez un mail de confirmation sur votre boîte mail.<span> Vous être déjà membre ?</span> retrouvez votre commande des maintentant directement dans <span>votre profil</span>.</p>
            <Button primary onClick={()=> navigate('/')}>continuer mes achats</Button>
            
            
        </StyledOrderConfirmation>
    )
};
