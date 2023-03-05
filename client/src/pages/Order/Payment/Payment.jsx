import { useNavigate} from 'react-router-dom';

import { StyledPayment } from './payment.style';

export default function Payment(props) {

/*======= HOOKS =======*/
const navigate = useNavigate();

/*======= VARIABLES =======*/

/*======= STATE =======*/

/*======= USEEFFECT =======*/

/*======= FUNCTIONS =======*/

    return (
        <StyledPayment>
            <p>Payment</p>
            <div>
                <p>TOTAL :{props.total}</p>
                <p>CODE VALIDITÉ : {props.code.valid}</p>
                <p>CODE ID : {props.code.codeId}</p>
                <p>MONTANT DE LA REDUC : {props.code.discountAmount}</p>
                <p>FRAIS DE LIVRAISON : {props.deliveryFee}</p>
            <button onClick={()=> navigate(-1)}>retour</button>
            <button onClick={()=> navigate('/commande/confirmation-de-commande')}>suivant</button>

            </div>
        </StyledPayment>
    )
};
