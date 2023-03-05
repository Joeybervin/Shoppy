import { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

/* utils */
import applyDiscount from '../../utils/applyDiscount';
/* components */
import  Cart  from './Cart/Cart' ;
import  Payment from './Payment/Payment' ;
import  OrderConfirmation  from './OrderConfirmation/OrderConfirmation' ;
/* Data */
import coupons from '../../data/coupons.json';
export default function Order() {

/*======= HOOKS =======*/
const navigate = useNavigate();
const { step } = useParams();
const couponsList = [...coupons]

/*======= VARIABLES =======*/

/*======= STATE =======*/
const cartList = useSelector(state => state.cart)
const [subTotal, setSubTotal] = useState(0);
const [deliveryFee, setDeliveryFee] = useState(4.99)
const [total, setTotal] = useState(0);
const [coupon, setCoupon] = useState({})
const [codeMessageErreur, setCodeMessageErreur] = useState("");
const [code, setCode] = useState({valid : false, codeId : "", discountAmount : 0});

/*======= USEEFFECT =======*/
useEffect(() => {
    const cartTotal = () => {
        let cartTotal = 0 ;
        for (let i = 0 ; i < cartList.length ; i++) {
            cartTotal += (cartList[i].price * cartList[i].quantity)
        }
        setSubTotal((cartTotal).toFixed(2));

        if (cartTotal > 49) {
            setDeliveryFee("GRATUIT*");
            setTotal(subTotal);
            setTotal((Number(subTotal - code.discountAmount)).toFixed(2));
        }
        else {
            setTotal((Number(subTotal - code.discountAmount) + deliveryFee).toFixed(2));
        }

        
    }
    cartTotal()


} ,[cartList, code.discountAmount, deliveryFee, subTotal, total]);

/*======= FUNCTIONS =======*/
const handleSaleCodeSubmit = (e) => {

    e.preventDefault();
    const validCoupon = couponsList.find(coupon => code.codeId === coupon.code)

    if (!validCoupon) {
        setCodeMessageErreur("Le coupon est invalide.");
        setCode({valid : false, codeId : "", discountAmount : 0});
    }
    else if (code.valid) {
        console.log("DEJA VALIDER")
        setCode({valid : false, codeId : "", discountAmount : 0});
        setCoupon({});
    }
    else {
        setCodeMessageErreur("");
        const discountAmount = applyDiscount(subTotal,validCoupon.amount);
        setCode({...code ,valid : true, discountAmount : Number(discountAmount)});
        setCoupon({name : `${validCoupon.code} -${validCoupon.amount}%`, amount : `-${discountAmount} €`});
    }

}


    if (step === "panier") {
        return (
            < Cart coupon={coupon} setCoupon={setCoupon} setCode={setCode} code={code} codeMessageErreur={codeMessageErreur} handleSaleCodeSubmit={handleSaleCodeSubmit} subTotal={subTotal} total={total} deliveryFee={deliveryFee} setCodeMessageErreur={setCodeMessageErreur}/>
        )
    }
    else if (step === "paiement") {
        return (
            <Payment total={total} code={code} deliveryFee={deliveryFee}  />
        )
    }
    else if (step === "confirmation-de-commande") {
        return (
            <OrderConfirmation />
        )
    }
  
    
};
