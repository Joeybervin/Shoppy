var express = require('express');
var router = express.Router();

router.post("/", async (req, res) => {

    const chekoutInfos = req.body;

    const cartList = chekoutInfos.cartList.map(product => {
        return {
            
                id: product.ref ,
                price: product.price,
                quantity: product.quantity,
                currency : "EUR",
                description: product.category,
            
        }
    })

    const calculateOrderAmount = (items) => {
        let cartTotal = 0;
        for (let i = 0; i < items.length; i++) {
            cartTotal += (items[i].price * items[i].quantity)
        }
        return Math.floor(cartTotal)
    };



});

module.exports = router;
