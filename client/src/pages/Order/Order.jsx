import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector} from 'react-redux';
/* utils */
import { applyDiscount, twoDecimal } from '../../utils/index';
/* components */
import  Cart  from './Cart/Cart' ;
import  Payment from './Payment/Payment' ;
import  OrderConfirmation  from './OrderConfirmation/OrderConfirmation' ;
/* Data */
import coupons from '../../data/coupons.json';


export default function Order() {

/*======= HOOKS =======*/
const { step } = useParams();
const cartList = useSelector(state => state.cart);

/*======= VARIABLES =======*/
const couponsList = [...coupons]

/*======= STATE =======*/
const [subTotal, setSubTotal] = useState(0);
const [deliveryFee, setDeliveryFee] = useState(4.99)
const [total, setTotal] = useState(0);
const [coupon, setCoupon] = useState({})
const [codeMessageErreur, setCodeMessageErreur] = useState("");
const [code, setCode] = useState({valid : false, codeId : "", discountAmount : 0});

const cart = {
    subTotal : twoDecimal(subTotal),
    total: twoDecimal(total),
    deliveryFee : deliveryFee,
    codeMessageErreur : codeMessageErreur,
    coupon : 
        {
            name : coupon.name,
            id : code.codeId,
            discountAmount : coupon.amount
        }
}

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
            setTotal((Number(subTotal - code.discountAmount)));
        }
        else {
            setTotal((Number(subTotal - code.discountAmount) + deliveryFee));
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
            < Cart cart={cart} code={code} setCoupon={setCoupon} setCode={setCode} handleSaleCodeSubmit={handleSaleCodeSubmit} setCodeMessageErreur={setCodeMessageErreur}/>
        )
    }
    else if (step === "paiement") {
        return (
            <Payment cart={cart} />
        )
    }
    else if (step === "confirmation-de-commande") {
        return (
            <OrderConfirmation />
        )
    }

};
